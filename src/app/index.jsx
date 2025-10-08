import {StartPage} from "../pages/start/";

function App() {
    return (
        <>
            <StartPage
                onStart={() => alert("Тут буде перехід до сторінки Game")}
                onShowRules={() => alert("Правила гри")}
            />
        </>
    )
}

export default App
