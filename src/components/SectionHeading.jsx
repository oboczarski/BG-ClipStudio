export default function SectionHeading({
  kicker,
  title,
  description,
  badge,
  children,
}) {
  return (
    <header className="section-heading">
      <div className="section-heading__copy">
        <div className="kicker">
          <span className="kicker__line" aria-hidden="true" />
          {kicker}
        </div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="section-heading__aside">
        {badge ? <span className="badge">{badge}</span> : null}
        {children}
      </div>
    </header>
  );
}
