import Section from "./Section.jsx";

const fields = [
  { name: "school", label: "School name", type: "text", required: true, placeholder: "University of Latvia" },
  { name: "title", label: "Title of study", type: "text", required: true, placeholder: "BSc Computer Science" },
  { name: "dateStart", label: "Study start", type: "month", required: true },
  { name: "dateEnd", label: "Study end", type: "month" },
];

export default function Education({ data, onSave }) {
  return <Section title="Education" fields={fields} data={data} onSave={onSave} />;
}
