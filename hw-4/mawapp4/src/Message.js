export default function Message ({chatID, fromUser, toUser, msgText}) {
    return (
        <div className="App-message">
            <p>{chatID}</p>
            <p>{fromUser} sent to {toUser}: </p>
            <p>{msgText}</p>
        </div>
    )
}