import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState([])

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>

  )
}

export default App
