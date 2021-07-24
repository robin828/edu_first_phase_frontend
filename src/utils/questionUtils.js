exports.displaySelectedQuestions = (selectedAnswer, question, lastQuestion) => {
    if (selectedAnswer[question] && selectedAnswer[question][1]) {
        selectedAnswer[question][1].current.checked = selectedAnswer[question][1];
      }
      else {
        if(selectedAnswer[lastQuestion]) {
          selectedAnswer[lastQuestion][1].current.checked = ''
        }
      }
}