import { useState } from 'react'
import './App.css'

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "Success is not in what you have, but who you are.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you."
]

function QuoteGeneratorApp() {
  
  const [quote, setQuote] = useState('')

  const generateQuotes = () => {
    const idx = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[idx])
  }
  return (
    <>
    <div className='container'>
      <h2>Random Quote Generator App</h2>
      <p className='paragh'>{quote}</p>
      <button className='btn' onClick={generateQuotes}>Generate Button</button>
      </div>
    </>
  )
}

export default QuoteGeneratorApp
