import '../StartPage.css';

export default function StartPage({onStart, onShowRules}) {
    return (
        <div className="center">
            <div className="container">
                <div className="panel">
                    <div className="stack">
                        <div>
                            <h1 className="h1">Anagram Solver</h1>
                            <p className="p">
                                Розклади букви та склади правильне слово. Це демо-каркас без логіки.
                            </p>
                        </div>
                        <div className="row">
                            <button className="btn" onClick={onStart}>Почати гру</button>
                            <button className="btn secondary" onClick={onShowRules}>Правила</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}