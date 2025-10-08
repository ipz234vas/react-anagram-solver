import Layout from '../../../shared/ui/layout';
import Button from '../../../shared/ui/button';

export default function GamePage({onEnd, onHome}) {
    const handleCheck = () => alert('TODO: перевірка відповіді');
    const handleEnd = () => (onEnd ? onEnd() : alert('TODO: завершення гри'));
    const handleHome = () => (onHome ? onHome() : alert('TODO: на головну'));

    const letters = ['М', 'Н', 'А', 'Г', 'А', 'Р', 'А', 'А'];

    return (
        <Layout>
            <div className="stack">
                <header className="g-header">
                    <div className="g-score">Рахунок: <strong>0</strong></div>
                    <h1 className="g-title">Anagram</h1>
                    <div className="g-level">Рівень: <strong>1</strong></div>
                </header>

                <div className="g-word" aria-label="поточне слово">
                    _ _ _ _ _ _ _ _
                </div>

                <div className="g-grid" role="list" aria-label="букви">
                    {letters.map((ch, i) => (
                        <button key={`${ch}-${i}`} className="g-tile" role="listitem">{ch}</button>
                    ))}
                </div>

                <div className="g-actions">
                    <Button onClick={handleCheck}>Перевірити</Button>
                    <Button onClick={handleEnd}>Завершити гру</Button>
                    <Button variant="secondary" onClick={handleHome}>На головну</Button>
                </div>
            </div>
        </Layout>
    );
}
