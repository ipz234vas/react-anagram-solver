import Layout from '../../../shared/ui/layout';
import Button from '../../../shared/ui/button';
import {GameHeader} from "../../../widgets/game-header";
import {LettersGrid, WordDisplay, WordPlaceholder} from "../../../entities/word";

export default function GamePage({onEnd, onHome}) {
    const handleCheck = () => alert('TODO: перевірка відповіді');
    const handleEnd = () => (onEnd ? onEnd() : alert('TODO: завершення гри'));
    const handleHome = () => (onHome ? onHome() : alert('TODO: на головну'));

    const letters = ['М', 'Н', 'А', 'Г', 'А', 'Р', 'А', 'А'];

    return (
        <Layout>
            <div className="stack">
                <GameHeader/>

                <WordDisplay targetLength={8} currentWord={''}/>
                <LettersGrid letters={letters} />

                <div className="actions">
                    <Button onClick={handleCheck}>Перевірити</Button>
                    <Button onClick={handleEnd}>Завершити гру</Button>
                    <Button variant="secondary" onClick={handleHome}>На головну</Button>
                </div>
            </div>
        </Layout>
    );
}
