export function RangeControl({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
  id,
  displayValue,
}) {
  return (
    <label className="control" htmlFor={id}>
      <span className="control__label">
        {label}
        <output>{displayValue ?? `${value}${unit}`}</output>
      </span>
      <input
        id={id}
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

export function ColorControl({ label, value, onChange, id }) {
  return (
    <label className="control control--color" htmlFor={id}>
      <span className="control__label">{label}</span>
      <span className="color-control">
        <input
          id={id}
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <code>{value.toUpperCase()}</code>
      </span>
    </label>
  );
}

export function SelectControl({ label, value, options, onChange, id }) {
  return (
    <label className="control" htmlFor={id}>
      <span className="control__label">{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => {
          const normalized =
            typeof option === "string" ? { label: option, value: option } : option;
          return (
            <option key={normalized.value} value={normalized.value}>
              {normalized.label}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export function TextControl({ label, value, onChange, id, maxLength = 36 }) {
  return (
    <label className="control" htmlFor={id}>
      <span className="control__label">{label}</span>
      <input
        id={id}
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
