import React from 'react'

const Message = ({message, deleteMessageHandler}) => {
    const priorityStrings = ['error', 'warning', 'info']
    const style = `message ${priorityStrings[message.priority - 1]}`

    return (
        <div className={style}>
            <div className="message-text-container">
                <p class="w400">{message.message}</p>
            </div>
            <button className="clear-button" onClick={() => deleteMessageHandler(message)}>Clear</button>
        </div>
    )
}

export default Message