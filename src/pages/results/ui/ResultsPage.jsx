import Layout from '../../../shared/ui/layout';
import Button from '../../../shared/ui/button';
import { ResultsHeader } from '../../../widgets/results-header';
import { ScoreSummary } from '../../../widgets/score-summary';

export default function ResultsPage({ score = 120, onRetry, onHome }) {
    const handleRetry = () => (onRetry ? onRetry() : alert('TODO: перезапуск гри'));
    const handleHome = () => (onHome ? onHome() : alert('TODO: на головну'));

    return (
        <Layout>
            <div className="r-stack">
                <ResultsHeader />
                <ScoreSummary score={score} />

                <div className="actions">
                    <Button onClick={handleRetry}>Спробувати ще раз</Button>
                    <Button variant="secondary" onClick={handleHome}>На головну</Button>
                </div>
            </div>
        </Layout>
    );
}