import "./App.css";
import { useState } from "react";
import Card from "@components/Card";
import Envelope from "@components/Envelope";
import GithubCard from "@components/GithubCard";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center overflow-hidden">
      {!open ? (
        <Envelope onOpen={() => setOpen(true)} />
      ) : (
        <Card name="María" />
      )}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[9999]">
        <GithubCard />
      </div>
    </div>
  );
}

export default App;
