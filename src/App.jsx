import "./App.css";
import { useState } from "react";
import Card from "@components/Card";
import Envelope from "@components/Envelope";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center overflow-hidden">
      {!open ? (
        <Envelope onOpen={() => setOpen(true)} />
      ) : (
        <Card name="María" />
      )}
    </div>
  );
}

export default App;
