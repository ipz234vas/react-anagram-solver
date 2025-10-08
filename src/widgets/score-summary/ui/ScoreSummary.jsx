export default function ScoreSummary({ score = 0 }) {
    return (
        <section className="r-scoreCard" aria-label="результат">
            <div className="r-scoreLabel">Ваш результат</div>
            <div className="r-scoreValue">{score}</div>
        </section>
    );
}