import React from 'react'
import Message from './message'

const MessageList = ({messages, messageType, deleteMessageHandler}) => {
    const typeStrings = ['Error Type 1', 'Warning Type 2', 'Info Type 3']
    const headerText = typeStrings[messageType - 1]

    return(
        <div className="message-list-container">
            <h3 className="column-header">{headerText}</h3>
            <p className="count-text">Count {messages.length}</p>
            <div className="message-list">
                {messages.map((message) => <Message key={message.id} message={message} deleteMessageHandler={deleteMessageHandler}/>)}
            </div>
        </div>
    )
}

export default MessageList