import { useEffect, useMemo, useRef, useState } from "react";
import {
  ColorControl,
  RangeControl,
  SelectControl,
  TextControl,
} from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import {
  FONT_GROUPS,
  buildFontEmbedCode,
  buildGoogleFontUrl,
  buildGoogleFontsPageUrl,
  fontBelongsToGroup,
  fontCatalog,
  fontSlug,
  getDefaultWeight,
  getFontGroup,
  getWeightAxis,
} from "../../data/fontCatalog";
import { copyToClipboard } from "../../utils/css";

const DEFAULT_SETTINGS = {
  sample: "Dynasty Hub",
  search: "",
  group: "all",
  size: 46,
  textColor: "#F3FBFF",
  surfaceColor: "#09111B",
  tracking: 0,
  lineHeight: 1.18,
  alignment: "left",
  casing: "preserve",
};

const fontLoadPromises = new Map();
const publicCatalogCount = fontCatalog.filter(
  (font) => font.catalogStatus === "catalog",
).length;
const apiServedCount = fontCatalog.length - publicCatalogCount;

function createFontChoices() {
  return Object.fromEntries(
    fontCatalog.map((font) => [
      font.family,
      { weight: getDefaultWeight(font) },
    ]),
  );
}

function loadFontStylesheet(font) {
  if (fontLoadPromises.has(font.family)) {
    return fontLoadPromises.get(font.family);
  }

  const promise = new Promise((resolve, reject) => {
    const id = `gallery-font-${fontSlug(font.family)}`;
    const existing = document.getElementById(id);

    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = buildGoogleFontUrl(font);
    link.dataset.fontFamily = font.family;
    link.addEventListener(
      "load",
      () => {
        link.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    link.addEventListener(
      "error",
      () => {
        fontLoadPromises.delete(font.family);
        link.remove();
        reject(new Error(`Could not load ${font.family}`));
      },
      { once: true },
    );
    document.head.appendChild(link);
  });

  fontLoadPromises.set(font.family, promise);
  return promise;
}

function useLazyFont(font) {
  const cardRef = useRef(null);
  const [status, setStatus] = useState("queued");

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return undefined;

    let cancelled = false;
    let observer;

    const beginLoad = () => {
      setStatus("loading");
      loadFontStylesheet(font)
        .then(() => {
          if (!cancelled) setStatus("ready");
        })
        .catch(() => {
          if (!cancelled) setStatus("failed");
        });
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer.disconnect();
          beginLoad();
        },
        { rootMargin: "700px 0px" },
      );
      observer.observe(node);
    } else {
      beginLoad();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [font]);

  return { cardRef, status };
}

function displaySample(sample, casing) {
  const value = sample.trim() ? sample : "Type a specimen above.";
  if (casing === "uppercase") return value.toLocaleUpperCase();
  if (casing === "lowercase") return value.toLocaleLowerCase();
  return value;
}

function formatWeightInventory(font) {
  const axis = getWeightAxis(font);
  if (axis) return `${axis.min}–${axis.max} variable`;
  if (font.weights.length === 1) return `${font.weights[0]} only`;
  return font.weights.join(" · ");
}

function FontWeightControl({ font, choice, controlId, onChange }) {
  const axis = getWeightAxis(font);

  if (axis) {
    return (
      <label className="font-card-control" htmlFor={controlId}>
        <span>
          Weight
          <output>{choice.weight}</output>
        </span>
        <input
          id={controlId}
          type="range"
          min={axis.min}
          max={axis.max}
          step="1"
          value={choice.weight}
          onChange={(event) => onChange("weight", Number(event.target.value))}
        />
      </label>
    );
  }

  if (font.weights.length > 1) {
    return (
      <label className="font-card-control" htmlFor={controlId}>
        <span>Weight</span>
        <select
          id={controlId}
          value={choice.weight}
          onChange={(event) => onChange("weight", Number(event.target.value))}
        >
          {font.weights.map((weight) => (
            <option key={weight} value={weight}>
              {weight}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <div className="font-card-control font-card-control--readout">
      <span>Weight</span>
      <strong>{font.weights[0]} only</strong>
    </div>
  );
}

function SharedCardRangeControl({
  controlId,
  label,
  value,
  min,
  max,
  step = 1,
  displayValue,
  onChange,
}) {
  return (
    <label className="font-card-control" htmlFor={controlId}>
      <span>
        {label}
        <output>{displayValue}</output>
      </span>
      <input
        id={controlId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function FontCard({
  font,
  groupId,
  choice,
  sample,
  casing,
  size,
  tracking,
  textColor,
  surfaceColor,
  copiedFamily,
  onChoiceChange,
  onSharedSettingChange,
  onCopy,
}) {
  const { cardRef, status } = useLazyFont(font);
  const group = getFontGroup(groupId);
  const controlIdSuffix = `${fontSlug(font.family)}-${groupId}`;
  const familyStyle = {
    fontFamily: `"${font.family}", ${font.fallback}`,
    fontWeight: choice.weight,
    fontOpticalSizing: "auto",
  };
  const sourceUrl =
    font.catalogStatus === "catalog"
      ? buildGoogleFontsPageUrl(font)
      : buildGoogleFontUrl(font);
  const sourceLabel =
    font.catalogStatus === "catalog" ? "Google Fonts specimen" : "Served CSS";
  const copyLabel =
    copiedFamily === font.family ? "Copied exact code" : "Copy import code";
  const designerLabel =
    font.designers.length > 0 ? font.designers.join(" · ") : "Designer metadata n/a";

  function updateChoice(key, value) {
    onChoiceChange(font.family, key, value);
  }

  return (
    <article
      ref={cardRef}
      className={`font-card font-card--${groupId}`}
      data-font-status={status}
    >
      <header className="font-card__header">
        <div className="font-card__identity">
          <span className="font-card__number">
            {String(fontCatalog.indexOf(font) + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="font-card__name-row">
              <h4 style={familyStyle}>{font.family}</h4>
              {font.arrowFont ? (
                <div
                  className="font-card__arrow-chips"
                  aria-label={
                    font.verticalArrowOnly
                      ? "Vertical arrow font directions"
                      : "Vertical and horizontal arrow font directions"
                  }
                  style={familyStyle}
                >
                  <span className="font-card__arrow-chip">↑↓</span>
                  {!font.verticalArrowOnly ? (
                    <span className="font-card__arrow-chip">←→</span>
                  ) : null}
                </div>
              ) : null}
            </div>
            <p>{designerLabel}</p>
          </div>
        </div>
        <div className="font-card__shared-colors" aria-label="Shared colors">
          <label
            className="font-card-color-control"
            title="Text color · applies to every card"
          >
            <span>TXT</span>
            <input
              type="color"
              value={textColor}
              aria-label={`${font.family} shared text color`}
              onInput={(event) =>
                onSharedSettingChange("textColor", event.target.value)
              }
            />
          </label>
          <label
            className="font-card-color-control"
            title="Specimen ground · applies to every card"
          >
            <span>BG</span>
            <input
              type="color"
              value={surfaceColor}
              aria-label={`${font.family} shared specimen ground color`}
              onInput={(event) =>
                onSharedSettingChange("surfaceColor", event.target.value)
              }
            />
          </label>
        </div>
      </header>

      <div className="font-card__specimen">
        <p style={familyStyle}>{displaySample(sample, casing)}</p>
        <span style={familyStyle}>
          DH dh · Aa Bb Cc · 0123456789 • &amp; ?! % ., &lt;/≥ ↑→
        </span>
      </div>

      <div className="font-card__controls">
        <FontWeightControl
          font={font}
          choice={choice}
          controlId={`weight-${controlIdSuffix}`}
          onChange={updateChoice}
        />
        <SharedCardRangeControl
          controlId={`size-${controlIdSuffix}`}
          label="Font size"
          value={size}
          min={20}
          max={84}
          displayValue={`${size}px`}
          onChange={(value) => onSharedSettingChange("size", value)}
        />
        <SharedCardRangeControl
          controlId={`tracking-${controlIdSuffix}`}
          label="Letter spacing"
          value={tracking}
          min={-5}
          max={8}
          step={0.1}
          displayValue={`${tracking.toFixed(1)}px`}
          onChange={(value) => onSharedSettingChange("tracking", value)}
        />
      </div>

      <div className="font-card__metadata" aria-label="Font metadata">
        <div className="font-card__status">
          <span className={`font-load font-load--${status}`} aria-hidden="true" />
          <small>
            {status === "ready"
              ? "type loaded"
              : status === "failed"
                ? "load failed"
                : status === "loading"
                  ? "loading type"
                  : "load queued"}
          </small>
        </div>
        <span className="font-card__metadata-accent">{group.shortLabel}</span>
        <span>{font.category}</span>
        <span>{formatWeightInventory(font)}</span>
        {font.italic ? <span>italic included</span> : null}
        {font.axes.length > 0 ? (
          <span>{font.axes.map((axis) => axis.tag).join(" · ")} axes</span>
        ) : (
          <span>static family</span>
        )}
        {font.colorCapabilities.length > 0 ? (
          <span>{font.colorCapabilities.join(" + ")}</span>
        ) : null}
        <span className="font-card__metadata-provenance">
          {font.catalogStatus === "catalog"
            ? "Public catalog"
            : "API-served / unlisted"}
        </span>
        <span className="font-card__metadata-provenance">
          {font.openSource ? "Open source" : "Usage terms apply"}
        </span>
        {font.brand ? (
          <span className="font-card__metadata-provenance">Brand family</span>
        ) : null}
        {font.licenseNote ? (
          <span className="font-card__metadata-notice">{font.licenseNote}</span>
        ) : null}
      </div>

      <footer className="font-card__footer">
        <a href={sourceUrl} target="_blank" rel="noreferrer">
          {sourceLabel}
          <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          className={`button button--quiet ${
            copiedFamily === font.family ? "button--active" : ""
          }`}
          onClick={() => onCopy(font, choice)}
        >
          {copyLabel}
        </button>
      </footer>
    </article>
  );
}

function GroupOverview({ activeGroup, onSelect }) {
  return (
    <div className="font-group-overview" aria-label="Font category summary">
      {FONT_GROUPS.map((group, index) => {
        const count = fontCatalog.filter((font) =>
          fontBelongsToGroup(font, group.id),
        ).length;
        return (
          <button
            key={group.id}
            type="button"
            className={activeGroup === group.id ? "is-active" : ""}
            onClick={() => onSelect(group.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{group.label}</strong>
            <small>{count} families</small>
          </button>
        );
      })}
    </div>
  );
}

export default function FontGallery() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [fontChoices, setFontChoices] = useState(createFontChoices);
  const [copiedFamily, setCopiedFamily] = useState("");

  const filteredFonts = useMemo(() => {
    const query = settings.search.trim().toLocaleLowerCase();
    return fontCatalog.filter((font) => {
      const matchesGroup =
        settings.group === "all" ||
        (settings.group === "arrow"
          ? font.arrowFont && !font.verticalArrowOnly
          : settings.group === "vertical-arrow"
            ? font.arrowFont
            : fontBelongsToGroup(font, settings.group));
      const matchesSearch =
        !query || font.family.toLocaleLowerCase().includes(query);
      return matchesGroup && matchesSearch;
    });
  }, [settings.group, settings.search]);

  const visibleGroups = FONT_GROUPS.map((group) => ({
    ...group,
    fonts: filteredFonts.filter((font) => fontBelongsToGroup(font, group.id)),
  })).filter((group) => group.fonts.length > 0);

  const galleryStyle = {
    "--gallery-font-size": `${settings.size}px`,
    "--gallery-text-color": settings.textColor,
    "--gallery-surface-color": settings.surfaceColor,
    "--gallery-tracking": `${settings.tracking}px`,
    "--gallery-line-height": settings.lineHeight,
    "--gallery-align": settings.alignment,
  };

  useEffect(() => {
    if (!copiedFamily) return undefined;
    const timer = window.setTimeout(() => setCopiedFamily(""), 2400);
    return () => window.clearTimeout(timer);
  }, [copiedFamily]);

  function updateSetting(key, value) {
    setSettings((current) => ({ ...current, [key]: value }));
  }

  function updateChoice(family, key, value) {
    setFontChoices((current) => ({
      ...current,
      [family]: { ...current[family], [key]: value },
    }));
  }

  async function copyFontCode(font, choice) {
    try {
      await copyToClipboard(buildFontEmbedCode(font, choice.weight, "normal"));
      setCopiedFamily(font.family);
    } catch {
      setCopiedFamily("Copy failed");
    }
  }

  function resetGallery() {
    setSettings(DEFAULT_SETTINGS);
    setFontChoices(createFontChoices());
    setCopiedFamily("");
  }

  function clearFilters() {
    setSettings((current) => ({ ...current, search: "", group: "all" }));
  }

  return (
    <div className="tab-page font-gallery" style={galleryStyle}>
      <section className="page-intro page-intro--fonts">
        <div>
          <span className="page-intro__eyebrow">A living type catalog</span>
          <h2>{fontCatalog.length} voices. One disciplined library.</h2>
        </div>
        <p>
          Compare every requested family with shared specimen controls and truthful
          per-family weights. Fonts stream in near the viewport, while every card
          carries a complete, ready-to-paste HTML import built for that exact
          family.
        </p>
        <div className="page-intro__metrics">
          <div>
            <strong>{fontCatalog.length}</strong>
            <span>requested families</span>
          </div>
          <div>
            <strong>3</strong>
            <span>curated groups</span>
          </div>
          <div>
            <strong>1–1000</strong>
            <span>widest weight range</span>
          </div>
        </div>
      </section>

      <section className="section font-gallery__workbench">
        <SectionHeading
          kicker="01 · universal specimen controls"
          title="Set the test once. Judge every family on equal ground."
          description="The shared controls change every visible font specimen. Weight remains independent on each card because every family exposes a different set of files or variable ranges."
          badge={`${filteredFonts.length} of ${fontCatalog.length} visible`}
        />

        <div className="font-toolbar">
          <div className="font-toolbar__sample">
            <TextControl
              id="font-gallery-sample"
              label="Shared specimen text"
              value={settings.sample}
              maxLength={120}
              onChange={(value) => updateSetting("sample", value)}
            />
          </div>

          <label className="control font-search" htmlFor="font-gallery-search">
            <span className="control__label">
              Search by family
              <output>{filteredFonts.length} matches</output>
            </span>
            <input
              id="font-gallery-search"
              type="search"
              value={settings.search}
              placeholder="Try “Rubik” or “Sans”…"
              onChange={(event) => updateSetting("search", event.target.value)}
            />
          </label>

          <SelectControl
            id="font-gallery-group"
            label="Category group"
            value={settings.group}
            options={[
              { value: "all", label: "All three groups" },
              { value: "arrow", label: "Arrow Fonts" },
              { value: "vertical-arrow", label: "Vert Arrow Fonts" },
              ...FONT_GROUPS.map((group) => ({
                value: group.id,
                label: group.label,
              })),
            ]}
            onChange={(value) => updateSetting("group", value)}
          />

          <RangeControl
            id="font-gallery-size"
            label="Font size"
            value={settings.size}
            min={20}
            max={84}
            unit="px"
            onChange={(value) => updateSetting("size", value)}
          />

          <ColorControl
            id="font-gallery-text-color"
            label="Text color"
            value={settings.textColor}
            onChange={(value) => updateSetting("textColor", value)}
          />

          <ColorControl
            id="font-gallery-surface-color"
            label="Specimen ground"
            value={settings.surfaceColor}
            onChange={(value) => updateSetting("surfaceColor", value)}
          />

          <RangeControl
            id="font-gallery-tracking"
            label="Letter spacing"
            value={settings.tracking}
            min={-5}
            max={8}
            step={0.1}
            unit="px"
            displayValue={`${settings.tracking.toFixed(1)}px`}
            onChange={(value) => updateSetting("tracking", value)}
          />

          <RangeControl
            id="font-gallery-leading"
            label="Line height"
            value={settings.lineHeight}
            min={0.85}
            max={1.7}
            step={0.05}
            displayValue={settings.lineHeight.toFixed(2)}
            onChange={(value) => updateSetting("lineHeight", value)}
          />

          <SelectControl
            id="font-gallery-alignment"
            label="Alignment"
            value={settings.alignment}
            options={[
              { value: "left", label: "Left" },
              { value: "center", label: "Center" },
              { value: "right", label: "Right" },
            ]}
            onChange={(value) => updateSetting("alignment", value)}
          />

          <SelectControl
            id="font-gallery-casing"
            label="Letter case"
            value={settings.casing}
            options={[
              { value: "preserve", label: "Preserve typing" },
              { value: "uppercase", label: "Uppercase" },
              { value: "lowercase", label: "Lowercase" },
            ]}
            onChange={(value) => updateSetting("casing", value)}
          />

          <div className="font-toolbar__actions">
            <button
              type="button"
              className="button button--quiet"
              onClick={resetGallery}
            >
              Reset gallery
            </button>
          </div>
        </div>

        <GroupOverview
          activeGroup={settings.group}
          onSelect={(group) => updateSetting("group", group)}
        />

        <div className="font-import-protocol">
          <article>
            <span>01</span>
            <div>
              <strong>Progressive loading</strong>
              <p>
                Family stylesheets are requested only as cards approach the
                viewport, keeping the rest of the app light.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <strong>Complete imports</strong>
              <p>
                Copy code includes preconnects, all published weights, italics
                where available, and a starter selector.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <strong>Metadata honesty</strong>
              <p>
                Variable ranges, static files, color capabilities, and unusual
                licensing status are disclosed per family.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section font-gallery__catalog">
        <SectionHeading
          kicker="02 · requested family catalog"
          title="Browse by voice. Tune by family. Copy without guesswork."
          description="Names and specimens use their selected family and weight. Shared card controls update the full catalog, while changing one family’s weight never resets another."
          badge="live Google-hosted type"
        />

        <p className="font-copy-status" aria-live="polite">
          {copiedFamily && copiedFamily !== "Copy failed"
            ? `${copiedFamily} import code copied to the clipboard.`
            : copiedFamily === "Copy failed"
              ? "The browser blocked clipboard access. Please try again."
              : ""}
        </p>

        {visibleGroups.length > 0 ? (
          <div className="font-groups">
            {visibleGroups.map((group, groupIndex) => (
              <section
                className={`font-group font-group--${group.id}`}
                key={group.id}
                aria-labelledby={`font-group-${group.id}`}
              >
                <header className="font-group__heading">
                  <div>
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 id={`font-group-${group.id}`}>{group.label}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <strong>
                    {group.fonts.length}{" "}
                    {group.fonts.length === 1 ? "family" : "families"}
                  </strong>
                </header>

                <div className="font-card-grid">
                  {group.fonts.map((font) => (
                    <FontCard
                      key={`${group.id}-${font.family}`}
                      font={font}
                      groupId={group.id}
                      choice={fontChoices[font.family]}
                      sample={settings.sample}
                      casing={settings.casing}
                      size={settings.size}
                      tracking={settings.tracking}
                      textColor={settings.textColor}
                      surfaceColor={settings.surfaceColor}
                      copiedFamily={copiedFamily}
                      onChoiceChange={updateChoice}
                      onSharedSettingChange={updateSetting}
                      onCopy={copyFontCode}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="font-empty-state">
            <span>0 / {fontCatalog.length}</span>
            <h3>No family matches that search.</h3>
            <p>
              Try a shorter family name, or clear the category and search filters
              to restore the full catalog.
            </p>
            <button
              type="button"
              className="button button--primary"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="section font-gallery__source-note">
        <SectionHeading
          kicker="03 · source and usage notes"
          title="A gallery can be beautiful and still tell the truth."
          description={`${publicCatalogCount} requested families are represented in the public Google Fonts metadata catalog. Product Sans and Avenir are served by the stylesheet endpoint but are not ordinary public-catalog entries, so their cards include explicit usage notices.`}
          badge={`${publicCatalogCount} catalog · ${apiServedCount} api-served`}
        />
        <div className="font-source-ledger">
          <div>
            <span>Source of truth</span>
            <strong>Google Fonts CSS2 + family metadata</strong>
            <p>
              Family names, published weights, italics, variable ranges, and
              classifications are encoded in structured data rather than guessed
              from a generic 100–900 control.
            </p>
          </div>
          <div>
            <span>Copy behavior</span>
            <strong>HTML-safe, complete family query</strong>
            <p>
              Ampersands are escaped for HTML, axes are requested with supported
              ranges, and static styles are enumerated in the required API order.
            </p>
          </div>
          <div>
            <span>Production reminder</span>
            <strong>Keep only the styles your project needs</strong>
            <p>
              This reference gallery deliberately imports complete families for
              exploration. A production page is usually faster with a narrower
              subset.
            </p>
          </div>
        </div>
        <div className="source-links font-source-links">
          <a
            href="https://developers.google.com/fonts/docs/css2"
            target="_blank"
            rel="noreferrer"
          >
            CSS2 API reference ↗
          </a>
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            Browse Google Fonts ↗
          </a>
          <a
            href="https://developers.google.com/fonts/docs/developer_api"
            target="_blank"
            rel="noreferrer"
          >
            Family metadata reference ↗
          </a>
        </div>
      </section>
    </div>
  );
}
