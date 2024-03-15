import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import ViteButton from "./components/ViteButton";
import ViteCard from "./components/ViteCard";

const viteButtons = {
  button1: {
    txt: "Get Started",
  },
  button2: {
    txt: "Why Vite?",
  },
  button3: {
    txt: "View on GitHub",
  },
  button4: {
    txt: "🎉ViteConf23!",
  },
};

const viteCards = {
  card1: {
    emoji: "💡",
    title: "Instant Server Start",
    txt: "On demand file serving over native ESM, no bundling required!",
  },
  card2: {
    emoji: "⚡️",
    title: "Lightning Fast HMR",
    txt: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
  },
  card3: {
    emoji: "🛠️",
    title: "Rich Features",
    txt: "Out-of-the-box support for TypeScript, JSX, CSS and more.",
  },
  card4: {
    emoji: "📦",
    title: "Optimized Build",
    txt: "Pre-configured Rollup build with multi-page and library mode support.",
  },
  card5: {
    emoji: "🔩",
    title: "Universal Plugins",
    txt: "Rollup-superset plugin interface shared between dev and build.",
  },
  card6: {
    emoji: "🔑",
    title: "Fully Typed APIs",
    txt: "Flexible programmatic APIs with full TypeScript typing.",
  },
};

export default function App() {
  return (
    <main>
      <div className="vite-logo-container">
        <div className="vite-logo-bg">
          <img src="/vite.svg" alt="vite logo" className="vite-logo" />
        </div>
      </div>
      <section className="vite-landing-container">
        <div>
          <p className="vite-landing-title">Vite</p>
          <p className="vite-landing-txt-title">
            Next Generation <br />
            Frontend Tooling
          </p>
          <p className="vite-landing-txt-desc">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
          <div className="vite-buttons-grid">
            <ViteButton description={viteButtons.button1.txt} />
            <ViteButton description={viteButtons.button2.txt} />
            <ViteButton description={viteButtons.button3.txt} />
            <ViteButton description={viteButtons.button4.txt} />
          </div>
        </div>
      </section>

      <section className="vite-landing-card-container">
        <ViteCard
          emoji={viteCards.card1.emoji}
          title={viteCards.card1.title}
          txt={viteCards.card1.txt}
        />
        <ViteCard
          emoji={viteCards.card2.emoji}
          title={viteCards.card2.title}
          txt={viteCards.card2.txt}
        />
        <ViteCard
          emoji={viteCards.card3.emoji}
          title={viteCards.card3.title}
          txt={viteCards.card3.txt}
        />
        <ViteCard
          emoji={viteCards.card4.emoji}
          title={viteCards.card4.title}
          txt={viteCards.card4.txt}
        />
        <ViteCard
          emoji={viteCards.card5.emoji}
          title={viteCards.card5.title}
          txt={viteCards.card5.txt}
        />
        <ViteCard
          emoji={viteCards.card6.emoji}
          title={viteCards.card6.title}
          txt={viteCards.card6.txt}
        />
      </section>
    </main>
  );
}
