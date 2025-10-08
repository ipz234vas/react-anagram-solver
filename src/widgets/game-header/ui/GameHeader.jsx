export default function GameHeader({ title = 'Anagram', score = 0, level = 1 }) {
    return (
        <header className="g-header">
            <div className="g-score">Рахунок: <strong>{score}</strong></div>
            <h1 className="g-title">{title}</h1>
            <div className="g-level">Рівень: <strong>{level}</strong></div>
        </header>
    );
}