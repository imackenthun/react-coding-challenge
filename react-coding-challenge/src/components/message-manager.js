import React, { useEffect, useState } from 'react'
import Api from '../api'
import MessageList from './message-list'
import '../index.css'

function MessageManager() {
  const [errorMessages, setErrorMessages] = useState([])
  const [warningMessages, setWarningMessages] = useState([])
  const [infoMessages, setInfoMessages] = useState([])
  const [isApiStarted, setIsApiStarted] = useState(true)
  const [api, setApi] = useState(new Api({
                          messageCallback: (message) => {
                            messageCallback(message)
                          },
                          stopGeneration: true,
                        }))

  useEffect(() => {api.start()}, [])

  const messageCallback = (message) => {
    switch (message.priority) {
      case 1:
        setErrorMessages(errArr => [...errArr, message])
        break
      case 2:
        setWarningMessages(warnArr => [...warnArr, message])
        break
      case 3:
        setInfoMessages(infArr => [...infArr, message])
    }
  }

  const deleteMessageHandler = (message) => {
    switch (message.priority) {
      case 1:
        setErrorMessages(errArr => errArr.filter(m => m.id != message.id))
        break
      case 2:
        setWarningMessages(warnArr => warnArr.filter(m => m.id != message.id))
        break
      case 3:
        setInfoMessages(infoArr => infoArr.filter(m => m.id != message.id))
    }
  }

  const clearMessages = () => {
    setErrorMessages([])
    setWarningMessages([])
    setInfoMessages([])
  }

  const toggleApi = () => {
    console.log(errorMessages, warningMessages, infoMessages)
    isApiStarted ? api.stop() : api.start()
    setIsApiStarted(!isApiStarted)
  }

  return (
    <div>
      <div className="main-container">
        <div className="column top-padding">
        <div className="margin-top">
            <MessageList 
              messages={errorMessages} 
              messageType={1}
              deleteMessageHandler={deleteMessageHandler}
            />
          </div>
        </div>
        <div className="column">
          <div className="button-container">
            <button
              className="button w600"
              onClick={toggleApi}
            >
              {isApiStarted ? 'STOP' : 'START'}
            </button>
            <button
              className="button w600"
              onClick={clearMessages}
            >
              CLEAR
            </button>
          </div>
          <MessageList 
              messages={warningMessages} 
              messageType={2}
              deleteMessageHandler={deleteMessageHandler}
            />
        </div>
        <div className="column">
          <div className="margin-top">
            <MessageList 
              messages={infoMessages} 
              messageType={3}
              deleteMessageHandler={deleteMessageHandler}
            />
          </div>
        </div>
      </div> 
      
      
    </div>
  )
}

export default MessageManager
