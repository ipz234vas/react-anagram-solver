export default function Layout({ children }) {
    return (
        <div className="center">
            <div className="container">
                <div className="panel">
                    {children}
                </div>
            </div>
        </div>
    )
}