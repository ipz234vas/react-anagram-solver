import { WordDisplay } from '../../../entities/word';
import { LettersGrid } from '../../../features/pick-letter';

export default function GameArea({ word, letters }) {
    return (
        <>
            <WordDisplay>{word}</WordDisplay>
            <LettersGrid letters={letters} />
        </>
    );
}