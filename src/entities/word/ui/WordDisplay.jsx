export default function WordDisplay({ currentWord = '', targetLength = 8 }) {
    const letters = currentWord.split('');
    const display = [];

    for (let i = 0; i < targetLength; i++) {
        display.push(letters[i] || '_');
    }

    return (
        <div className="g-word" role="status" aria-label="поточне слово">
            {display.join(' ')}
        </div>
    );
}