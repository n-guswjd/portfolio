import "./App.css";

function App() {
  return (
    <>
      <header className="flex items-center px-6 py-4">
        <section className="flex items-center gap-2">
          <img
            src="src/assets/icon.png"
            alt="icon img"
            className="w-10 h-10 rounded-full object-cover"
          />

          <p className="text-lg font-medium font-display flex flex-col">
            남현정
            <span className="text-sm text-muted font-sans">
              Frontend Engineer
            </span>
          </p>
        </section>

        <section></section>

        <section className="flex items-center gap-4 ml-auto">
          <a
            href="https://github.com/n-guswjd"
            className="flex items-center gap-2 border rounded-full p-3 border-primary-100"
          >
            <img
              src="src/assets/github-logo.png"
              alt="GitHub icon"
              className="w-6 h-6"
            />
            GitHub
          </a>

          <img
            src="src/assets/profile.png"
            alt="남현정 프로필"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-100 ring-offset-4"
          />
        </section>
      </header>
    </>
  );
}

export default App;
