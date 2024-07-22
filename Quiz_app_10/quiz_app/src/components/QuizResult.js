import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore} <br/> <br />
        Your Scored {props.score} out of {props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult