export default function LettersGrid({ letters = [] }) {
    return (
        <div className="g-grid" role="list" aria-label="букви">
            {letters.map((ch, i) => (
                <button key={`${ch}-${i}`} className="g-tile" role="listitem">{ch}</button>
            ))}
        </div>
    );
}