import React, { useState } from "react";
import "./App.css";
import Accordion from "./Accordion";
function App() {
  const [active, setActive] = useState("Question1");

  return (
    <div className="App">
      <h1> Faq App </h1>

      <Accordion title="Question1" active={active} setActive={setActive} />
      <Accordion title="Question1" active={active} setActive={setActive} />
      <Accordion title="Question1" active={active} setActive={setActive} />
      <Accordion title="Question1" active={active} setActive={setActive} />
      <Accordion title="Question1" active={active} setActive={setActive} />
    </div>
  );
}

export default App;
