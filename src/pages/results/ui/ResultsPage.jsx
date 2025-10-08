import Layout from '../../../shared/ui/layout';
import Button from '../../../shared/ui/button';
import {ScoreSummary} from "../../../widgets/score-summary/index.js";

export default function ResultsPage({score = 120, onRetry, onHome}) {
    const handleRetry = () => (onRetry ? onRetry() : alert('TODO: перезапуск гри'));
    const handleHome = () => (onHome ? onHome() : alert('TODO: на головну'));

    return (
        <Layout>
            <div className="r-stack">
                <header className="r-header">
                    <h2 className="r-title">Гру завершено</h2>
                    <p className="r-sub">Дякуємо за гру!</p>
                </header>

                <ScoreSummary score={score}/>

                <div className="actions">
                    <Button onClick={handleRetry}>Спробувати ще раз</Button>
                    <Button variant="secondary" onClick={handleHome}>На головну</Button>
                </div>
            </div>
        </Layout>
    );
}
