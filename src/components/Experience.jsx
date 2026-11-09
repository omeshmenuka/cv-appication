import Section from "./Section.jsx";

const fields = [
  { name: "company", label: "Company name", type: "text", required: true, placeholder: "Acme Ltd." },
  { name: "position", label: "Position title", type: "text", required: true, placeholder: "Frontend developer" },
  { name: "dateStart", label: "Date from", type: "month", required: true },
  { name: "dateEnd", label: "Date until", type: "month" },
  {
    name: "responsibilities",
    label: "Main responsibilities",
    type: "textarea",
    placeholder: "What did you own, build or improve?",
  },
];

export default function Experience({ data, onSave }) {
  return <Section title="Practical experience" fields={fields} data={data} onSave={onSave} />;
}
