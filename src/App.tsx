import "./App.css";
import GameItem from "./components/GameItem";
import ramsetu from "./assets/gameIcons/RamSetu.png";
import snake from "./assets/gameIcons/Snake.jpeg";
import { snakeLink, ramsetuLink } from "./projectLinks";

function App() {
  return (
    <main>
      <h1 className="glowFlicker heading">Game Room</h1>
      <div className="trendingGames">
        <h1 className="subHeading">Trending Games</h1>
        <div className="gameContainer">
          <GameItem img={snake} projectLink={snakeLink} />
          <GameItem img={ramsetu} projectLink={ramsetuLink} />
        </div>
      </div>
      <div className="footer">
        <h5>Follow Me On : github</h5>
      </div>
    </main>
  );
}

export default App;
