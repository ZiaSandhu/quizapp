import { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
function App() {
  const [quizPage,setQuizPage] = useState(false)
  return (
   <>
    {!quizPage ? <div className='intro-page'>
        <h2 className='intro-title'>Quizzical</h2>
        <p className='intro-desc'>Some Description if Needed</p>
        <button className='start-quiz' onClick={()=>setQuizPage(true)}>
            Start Quiz
        </button>
    </div> : <Quiz quizPage={setQuizPage}/>}
   </>
  );
}

export default App;
