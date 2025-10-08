import {StartPage} from "../pages/start/";
import {GamePage} from "../pages/game";
import {ResultsPage} from "../pages/results";

function App() {
    return (
        <>
            {/*<StartPage*/}
            {/*    onStart={() => alert("Тут буде перехід до сторінки Game")}*/}
            {/*    onShowRules={() => alert("Правила гри")}*/}
            {/*/>*/}
            {/*<GamePage/>*/}
            <ResultsPage/>
        </>
    )
}

export default App
