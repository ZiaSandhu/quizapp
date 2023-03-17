import React, { useEffect }  from 'react'
import Question from './Question'
import { useState } from 'react'

export default function Quiz(props) {
  const [allQuestion,setAllQuestion] = useState([])
  const [allCompleted,setAllCompleted] = useState(false)
  const [checkAnswer,setCheckAnswer] = useState(false)
  const [score,setScore]= useState(0)

  
  useEffect(
    ()=>{
      fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setAllQuestion(data.results.map(
          function (ques,index){
            return({
              question:ques.question,
              choice:[...ques.incorrect_answers,ques.correct_answer].sort(()=>Math.random() - 0.5),
              selectedOpiton:"",
              correct_answer:ques.correct_answer,
              id:index
            })
          }
        )))
    },[])

    useEffect(()=>{
      setAllCompleted(allQuestion.every(quest => quest.selectedOpiton !== ""))
    },[selectAnswer])
    // console.log(allQuestion)
  function selectAnswer(id,option){
    setAllQuestion(prev => prev.map(quest => {
      return quest.id === id ? {...quest,selectedOpiton:option} : quest
    }))
    console.log(id,option)
  }
  function checkAllAnswer(){
    console.log(allQuestion)
    setCheckAnswer(true)
    question.forEach(quest => {
      if(quest.selectedOpiton === quest.correct_answer )
        setScore((score+1))
    });
    
  }
  const question= allQuestion.map((ques,index) => 
    <Question 
      key={index} 
      question={ques} 
      selectAnswer={selectAnswer} 
      id={ques.id} 
    />)
  function StartOver(){
    props.quizPage(false)
  }
  return (
    <div className='intro-page center'> 
      {question}
      {!checkAnswer ?  <button className='checkAnswer' disabled={!allCompleted} onClick={checkAllAnswer} > Check Answer </button> 
      : <div className='score'> <h4>You Scored {score}/5</h4><button className='play-again' onClick={StartOver}>Play Again</button></div>}

    </div>
  )
}
