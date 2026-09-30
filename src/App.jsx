import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProjectsView from "./components/ProjectsView";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import ContactView from "./components/ContactView";

import Proflie from "./assets/profile.png";

function App() {
  const [tab, setTab] = useState("projects");

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_center,theme(colors.primary.100)_0%,theme(colors.primary.50)_40%,white_100%)]">
      <Header tab={tab} onTabChange={setTab} />

      <div className="flex-1 flex items-center justify-center">
        <ProjectsView />
      </div>

      <footer className="flex items-center justify-end h-16 w-full px-8">
        <p className="text-sm text-subtext">&copy; 2026 남현정 포트폴리오</p>
      </footer>

      <Dialog
        open={tab === "contact"}
        onOpenChange={(open) => {
          if (!open) setTab("projects");
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <img
                src={Proflie}
                alt="Profile"
                className="h-10 w-10 rounded-full object-contain p-2"
              />
              <div className="flex flex-col">
                <DialogTitle>남현정</DialogTitle>
                <p className="text-sm text-subtext mt-1">Frontend Engineer</p>
              </div>
            </div>
          </DialogHeader>
          <ContactView />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
