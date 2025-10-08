import {StartPage} from "../pages/start/";
import GamePage from "../pages/game/ui/GamePage.jsx";

function App() {
    return (
        <>
            {/*<StartPage*/}
            {/*    onStart={() => alert("Тут буде перехід до сторінки Game")}*/}
            {/*    onShowRules={() => alert("Правила гри")}*/}
            {/*/>*/}
            <GamePage/>
        </>
    )
}

export default App
