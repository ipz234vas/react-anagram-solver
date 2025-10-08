import Layout from '../../../shared/ui/layout'
import Button from '../../../shared/ui/button'

export default function StartPage({ onStart, onShowRules }) {
    return (
        <Layout>
            <div className="stack">
                <div>
                    <h1 className="h1">Anagram Solver</h1>
                    <p className="p">Розклади букви та склади правильне слово. Це демо-каркас без логіки.</p>
                </div>
                <div className="row">
                    <Button onClick={onStart}>Почати гру</Button>
                    <Button variant="secondary" onClick={onShowRules}>Правила</Button>
                </div>
            </div>
        </Layout>
    )
}
