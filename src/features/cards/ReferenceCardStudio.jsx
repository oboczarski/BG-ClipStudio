import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import {
  ColorControl,
  RangeControl,
  SelectControl,
} from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import {
  getReferenceCardCss,
  getReferenceCardStyle,
  referenceCards,
} from "../../data/referenceCards";
import { clamp } from "../../utils/css";

function cloneCards() {
  return structuredClone(referenceCards);
}

export default function ReferenceCardStudio() {
  const [cards, setCards] = useState(cloneCards);
  const [selectedId, setSelectedId] = useState(cards[0].id);
  const [selectedLayer, setSelectedLayer] = useState(0);
  const [settings, setSettings] = useState({
    size: 270,
    padding: 14,
    border: 6,
    radius: cards[0].radius,
    logoSize: 70,
    logoOpacity: 100,
  });

  const card = cards.find((item) => item.id === selectedId);
  const layer = card.layers[selectedLayer] ?? card.layers[0];
  const style = getReferenceCardStyle(card, settings);
  const code = getReferenceCardCss(card, settings);

  function selectCard(nextCard) {
    setSelectedId(nextCard.id);
    setSelectedLayer(0);
    setSettings((current) => ({ ...current, radius: nextCard.radius }));
  }

  function updateStop(stopIndex, property, rawValue) {
    setCards((currentCards) =>
      currentCards.map((currentCard) => {
        if (currentCard.id !== selectedId) return currentCard;

        return {
          ...currentCard,
          layers: currentCard.layers.map((currentLayer, layerIndex) => {
            if (layerIndex !== selectedLayer) return currentLayer;
            const upperBound = currentLayer.unit === "deg" ? 360 : 100;

            return {
              ...currentLayer,
              stops: currentLayer.stops.map((stop, index) => {
                if (index !== stopIndex) return stop;
                let value = rawValue;
                if (property === "position") {
                  const previous = currentLayer.stops[index - 1]?.position ?? 0;
                  const next =
                    currentLayer.stops[index + 1]?.position ?? upperBound;
                  value = clamp(rawValue, previous, next);
                }
                return { ...stop, [property]: value };
              }),
            };
          }),
        };
      }),
    );
  }

  function resetCard() {
    const original = referenceCards.find((item) => item.id === selectedId);
    setCards((currentCards) =>
      currentCards.map((item) =>
        item.id === selectedId ? structuredClone(original) : item,
      ),
    );
    setSelectedLayer(0);
    setSettings((current) => ({ ...current, radius: original.radius }));
  }

  return (
    <section className="section" id="reference-card-studio">
      <SectionHeading
        kicker="05 · reference card studio"
        title="Edit the real color stops inside every retained reference card."
        description="The five source cards are preserved. The old filter, mouse, and random color-mix controls are gone; every row below now edits an actual stop in the selected gradient layer."
        badge="5 retained cards · true stop editing"
      />

      <div className="reference-studio">
        <aside className="reference-studio__controls panel">
          <div className="panel-heading">
            <div>
              <span>Reference library</span>
              <small>select a card</small>
            </div>
            <button className="button button--quiet" type="button" onClick={resetCard}>
              Reset card
            </button>
          </div>

          <div className="reference-picker">
            {cards.map((option, index) => (
              <button
                key={option.id}
                type="button"
                className={`reference-option ${selectedId === option.id ? "reference-option--active" : ""}`}
                onClick={() => selectCard(option)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{option.title}</strong>
                  <small>{option.group}</small>
                </div>
              </button>
            ))}
          </div>

          <div className="control-grid control-grid--three">
            <RangeControl
              id="reference-size"
              label="Card size"
              min={180}
              max={360}
              value={settings.size}
              unit="px"
              onChange={(size) => setSettings((current) => ({ ...current, size }))}
            />
            <RangeControl
              id="reference-padding"
              label="Padding"
              min={0}
              max={38}
              value={settings.padding}
              unit="px"
              onChange={(padding) =>
                setSettings((current) => ({ ...current, padding }))
              }
            />
            <RangeControl
              id="reference-border"
              label="Border"
              min={0}
              max={18}
              value={settings.border}
              unit="px"
              onChange={(border) =>
                setSettings((current) => ({ ...current, border }))
              }
            />
            <RangeControl
              id="reference-radius"
              label="Radius"
              min={0}
              max={card.id === "orbital-coin" ? 999 : 70}
              value={settings.radius}
              unit="px"
              displayValue={
                settings.radius >= 999 ? "50%" : `${settings.radius}px`
              }
              onChange={(radius) =>
                setSettings((current) => ({ ...current, radius }))
              }
            />
            <RangeControl
              id="reference-logo-size"
              label="Logo size"
              min={30}
              max={92}
              value={settings.logoSize}
              unit="%"
              onChange={(logoSize) =>
                setSettings((current) => ({ ...current, logoSize }))
              }
            />
            <RangeControl
              id="reference-logo-opacity"
              label="Logo opacity"
              min={0}
              max={100}
              value={settings.logoOpacity}
              unit="%"
              onChange={(logoOpacity) =>
                setSettings((current) => ({ ...current, logoOpacity }))
              }
            />
          </div>

          <div className="layer-workbench">
            <div className="panel-heading">
              <div>
                <span>Actual gradient layer</span>
                <small>{card.layers.length} rendered layers</small>
              </div>
            </div>
            <SelectControl
              id="reference-layer"
              label="Layer to edit"
              value={String(selectedLayer)}
              options={card.layers.map((item, index) => ({
                value: String(index),
                label: `${index + 1} · ${item.name} · ${item.box}`,
              }))}
              onChange={(value) => setSelectedLayer(Number(value))}
            />
            <div className="layer-meta">
              <span>{layer.kind.replace("-gradient", "")}</span>
              <span>{layer.box}</span>
              <span>{layer.geometry}</span>
            </div>
            <div className="stop-editor">
              {layer.stops.map((stop, index) => (
                <div className="stop-row" key={`${layer.name}-${index}`}>
                  <div className="stop-row__index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <small>stop</small>
                  </div>
                  <ColorControl
                    id={`reference-stop-color-${index}`}
                    label="Color"
                    value={stop.color}
                    onChange={(value) => updateStop(index, "color", value)}
                  />
                  <RangeControl
                    id={`reference-stop-position-${index}`}
                    label="Position"
                    min={0}
                    max={layer.unit === "deg" ? 360 : 100}
                    value={stop.position}
                    unit={layer.unit ?? "%"}
                    onChange={(value) => updateStop(index, "position", value)}
                  />
                  <RangeControl
                    id={`reference-stop-alpha-${index}`}
                    label="Opacity"
                    min={0}
                    max={1}
                    step={0.01}
                    value={stop.alpha}
                    onChange={(value) => updateStop(index, "alpha", value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="reference-studio__preview">
          <div className="studio-stage stage-grid">
            <div className="reference-card" style={style}>
              <img
                src="/dynasty-hub-mark.png"
                alt="Dynasty Hub mark"
                style={{
                  width: `${settings.logoSize}%`,
                  height: `${settings.logoSize}%`,
                  objectFit: "contain",
                  opacity: settings.logoOpacity / 100,
                  filter: "drop-shadow(0 16px 22px rgb(0 0 0 / 58%))",
                }}
              />
            </div>
          </div>
          <div className="studio-readout" aria-label="Current card details">
            <div>
              <span>Card</span>
              <strong>{card.title}</strong>
            </div>
            <div>
              <span>Selected layer</span>
              <strong>{layer.name}</strong>
            </div>
            <div>
              <span>Paint box</span>
              <strong>{layer.box}</strong>
            </div>
            <div>
              <span>Stops</span>
              <strong>{layer.stops.length}</strong>
            </div>
          </div>
          <p className="studio-note">{card.note}</p>
          <CodePanel label="Selected card · live exact CSS" code={code} />
        </div>
      </div>
    </section>
  );
}
