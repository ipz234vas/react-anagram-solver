import {useState} from "react";
import {StartPage} from "../pages/start/";
import {GamePage} from "../pages/game";
import {ResultsPage} from "../pages/results";

function App() {
    const [page, setPage] = useState("start");

    const goToStart = () => setPage("start");
    const goToGame = () => setPage("game");
    const goToResults = () => setPage("results");

    const renderPage = () => {
        switch (page) {
            case "start":
                return <StartPage onStart={goToGame} onShowRules={() => alert("Правила гри")}/>;
            case "game":
                return <GamePage onHome={goToStart} onEnd={goToResults}/>;
            case "results":
                return <ResultsPage onHome={goToStart} onRetry={goToGame}/>;
            default:
                return null;
        }
    };

    return <>{renderPage()}</>;
}

export default App;
