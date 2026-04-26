import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = null
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    }
    
    return () => clearInterval(interval)
  }, [isRunning])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getMessage = () => {
    if (seconds < 90) {
      return { text: 'Ai! Está fervendo!', emoji: '🔥' }
    } else if (seconds < 180) {
      return { text: 'Na temperatura Ideal!', emoji: '😁' }
    } else if (seconds < 300) {
      return { text: 'Vai esfriar!', emoji: '😥' }
    } else if (seconds < 420) {
      return { text: 'Frio!!!', emoji: '🥶' }
    } else {
      return { text: 'Estragou!', emoji: '😭' }
    }
  }

  const message = getMessage()

  return (
    <div className="app-container">
      <main className="main-content">
        <div className="message-container">
          {isRunning && (
            <div className="gradient-text">
              <span className="gradient-text-content">{message.text}</span> {message.emoji}
            </div>
          )}
          {!isRunning && (
            <h1 className="title">Monitore o resfriamento do meu café!</h1>
          )}
        </div>

        <div className="timer">
          {formatTime(seconds)}
        </div>

        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={toggleTimer}
          >
            {isRunning ? 'Encerrar' : 'Iniciar'}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={resetTimer}
          >
            Resetar
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>Criado por <a href="https://github.com/Gu1assis" target="_blank" rel="noopener noreferrer">@Gu1Assis</a></p>
      </footer>
    </div>
  )
}

export default App
