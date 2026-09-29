import icon from "../assets/icon.png";
import githubLogo from "../assets/github-logo.png";
import profile from "../assets/profile.png";

import { FileText, Mail } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

function Header({ tab, onTabChange }) {
  return (
    <header className="flex items-center px-6 py-4">
      <section className="flex items-center gap-2">
        <img src={icon} alt="icon img" className="h-10 w-auto object-contain" />

        <p className="text-lg font-medium font-display flex flex-col">
          남현정
          <span className="text-sm text-subtext font-sans">
            Frontend Engineer
          </span>
        </p>
      </section>

      <section className="flex-1 flex justify-center">
        <Tabs value={tab} onValueChange={onTabChange}>
          <TabsList>
            <TabsTrigger value="projects">
              <FileText size={16} />
              Projects
            </TabsTrigger>
            <TabsTrigger value="contact">
              <Mail size={16} />
              Contact
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      <section className="flex items-center gap-4 ml-auto">
        <a
          href="https://github.com/n-guswjd"
          className="flex items-center gap-2 border rounded-full p-3 border-primary-100"
        >
          <img src={githubLogo} alt="GitHub icon" className="w-6 h-6" />
          GitHub
        </a>

        <img
          src={profile}
          alt="남현정 프로필"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-100 ring-offset-4"
        />
      </section>
    </header>
  );
}

export default Header;
