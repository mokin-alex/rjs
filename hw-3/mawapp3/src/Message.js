export default function Message ({fromUser, toUser, msgText}) {
    return (
        <div className="App-message">
            <p>{fromUser} sent to {toUser}: </p>
            <p>{msgText}</p>
        </div>
    )
}