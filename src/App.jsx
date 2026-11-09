import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import "./styles/App.css";

const emptyCv = {
  general: { name: "", email: "", phone: "" },
  education: { school: "", title: "", dateStart: "", dateEnd: "" },
  experience: {
    company: "",
    position: "",
    responsibilities: "",
    dateStart: "",
    dateEnd: "",
  },
};

export default function App() {
  // All CV data lives here; each section receives its slice and a save handler.
  const [cv, setCv] = useState(emptyCv);

  function updateSection(section, values) {
    setCv((prev) => ({ ...prev, [section]: values }));
  }

  return (
    <main className="cv">
      <h1 className="cv-title">CV Builder</h1>
      <GeneralInfo
        data={cv.general}
        onSave={(values) => updateSection("general", values)}
      />
      <Education
        data={cv.education}
        onSave={(values) => updateSection("education", values)}
      />
      <Experience
        data={cv.experience}
        onSave={(values) => updateSection("experience", values)}
      />
    </main>
  );
}
