import React from 'react'
// import $ from 'jQuery'

export default function Question(props) {

  const styler={
    // background: "blue"
  }

  const options=props.question.choice.map((opt,index) => <button style={styler} key={index}  onClick={()=>props.selectAnswer(props.id,opt)}  name={props.question.id} >{opt}</button> )
  return (
    <div className='question'>
        <h4 className='question-title'>{props.question.question}</h4>
        <div className='option'>
            {options}
        </div>
        <hr/>
    </div>
  )
}
