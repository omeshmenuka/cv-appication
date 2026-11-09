import Section from "./Section.jsx";

const fields = [
  { name: "name", label: "Full name", type: "text", required: true, placeholder: "Ada Lovelace" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "ada@example.com" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+371 20 000 000" },
];

export default function GeneralInfo({ data, onSave }) {
  return <Section title="General information" fields={fields} data={data} onSave={onSave} />;
}
