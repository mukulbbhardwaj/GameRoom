import "./App.css";
import GameItem from "./components/GameItem";
import ramsetu from "./assets/gameIcons/RamSetu.png";
import snake from "./assets/gameIcons/Snake.jpeg";
import saveMonke from './assets/gameIcons/saveMonke.png';
import { snakeLink, ramsetuLink,saveMonkeLink } from "./projectLinks";

function App() {
  return (
    <main >
      <h1 className="glowFlicker heading">Monke Play</h1>
      <div className="trendingGames">
        <h1 className="subHeading">Trending Games</h1>
        <div className="gameContainer">
          <GameItem img={snake} projectLink={snakeLink} />
          <GameItem img={ramsetu} projectLink={ramsetuLink} />
          <GameItem img={saveMonke} projectLink={saveMonkeLink} />
        </div>
      </div>
      <div className="footer">
        <h5>
          Follow Me On :
          <br/>
          <a
            className="links"
            href="https://github.com/mukulbbhardwaj"
            target="_blank"
          >
            github
          </a>{" "}
          &{" "}
          <a
            className="links"
            href="https://twitter.com/mukulbbhardwaj"
            target="_blank"
          >
            X
          </a>
        </h5>
      </div>
    </main>
  );
}

export default App;
