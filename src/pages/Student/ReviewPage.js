import React from 'react'

const ReviewPage = ({question, selectedAnswer}) => {
    return (
        <div>
        <p>{question.questionText}</p>
        <p>{question.correctAnswer}</p>
        {question.options.forEach(option=><p>{option}</p>)}
        <p>{selectedAnswer}</p>
        {/* <p>{question.correctAnswer}</p> */}
        </div>
    )
}

export default ReviewPage
