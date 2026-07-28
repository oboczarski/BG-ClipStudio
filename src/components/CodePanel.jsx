import { useState } from "react";
import { copyToClipboard } from "../utils/css";

export default function CodePanel({
  code,
  label = "Copyable CSS",
  language = "CSS",
  className = "",
}) {
  const [copiedCode, setCopiedCode] = useState("");
  const [copyFailed, setCopyFailed] = useState(false);
  const copyState = copyFailed
    ? "Select code"
    : copiedCode === code
      ? "Copied"
      : "Copy";

  async function handleCopy() {
    try {
      await copyToClipboard(code);
      setCopiedCode(code);
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <section className={`code-panel ${className}`.trim()} aria-label={label}>
      <header className="code-panel__header">
        <div>
          <span className="code-panel__signal" aria-hidden="true" />
          <strong>{label}</strong>
          <small>{language}</small>
        </div>
        <button className="button button--quiet" type="button" onClick={handleCopy}>
          {copyState}
        </button>
      </header>
      <pre tabIndex="0">
        <code>{code}</code>
      </pre>
    </section>
  );
}
