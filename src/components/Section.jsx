import { useState } from "react";
import "../styles/Section.css";

function formatValue(field, value) {
  if (!value) return "—";
  if (field.type === "month") {
    const [year, month] = value.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  return value;
}

/**
 * Reusable section: shows a form while editing, and plain HTML once submitted.
 * Props:
 *  - title: heading text
 *  - fields: [{ name, label, type, required?, placeholder? }]
 *  - data: current saved values (object keyed by field name)
 *  - onSave: called with the new values on submit
 */
export default function Section({ title, fields, data, onSave }) {
  const hasData = Object.values(data).some(Boolean);
  const [isEditing, setIsEditing] = useState(!hasData);
  const [draft, setDraft] = useState(data);

  function handleChange(e) {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(draft);
    setIsEditing(false);
  }

  function handleEdit() {
    setDraft(data); // pre-fill inputs with the previously saved values
    setIsEditing(true);
  }

  return (
    <section className="section">
      <header className="section-header">
        <h2>{title}</h2>
        {!isEditing && (
          <button type="button" className="btn btn-secondary" onClick={handleEdit}>
            Edit
          </button>
        )}
      </header>

      {isEditing ? (
        <form className="section-form" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label
              key={field.name}
              className={field.type === "textarea" ? "field field-wide" : "field"}
            >
              <span>{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={draft[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows={4}
                  required={field.required}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={draft[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </label>
          ))}
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save {title.toLowerCase()}
            </button>
          </div>
        </form>
      ) : (
        <dl className="section-display">
          {fields.map((field) => (
            <div
              key={field.name}
              className={field.type === "textarea" ? "row row-wide" : "row"}
            >
              <dt>{field.label}</dt>
              <dd>{formatValue(field, data[field.name])}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
