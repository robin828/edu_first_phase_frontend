import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Latex from 'react-latex';
import axios from 'axios';


const AddQuestions = () => {

    const [questionText, setQuestionText] = useState("")
    const [subject, setSubject] = useState("")
    const [chapter, setChapter] = useState("")
    const [standard, setStandard] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [solution, setSolution] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    let mainOption = [];



    const handleSubmit = async (e) => {
        e.preventDefault();
        mainOption.push(optionA, optionB, optionC, optionD)
        const payload = {
            questionText: questionText,
            subject: subject,
            chapter: chapter,
            className: standard,
            correctAnswer: correctAnswer,
            solution: solution,
            options: mainOption,
            examName: 'X_Board'
        }
        await axios.post('http://localhost:9000/api/addquestion', payload).then(res=>console.log(res));
        console.log(subject)
        console.log(mainOption, '*')
        console.log(questionText, subject, chapter, standard, correctAnswer, solution)

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
            QuestionText
            <TextField
                id="standard-multiline-flexible"
                multiline
                fullWidth
                placeholder=""
                // value={latex}
                style={{marginBottom: "3rem", marginLeft: "2rem"}}
                onChange={(e)=>setQuestionText(e.target.value)}
            />
            {/* <TextField fullWidth onChange={(e)=>setQuestionText(e.target.value)} /> */}
            <div style={{fontSize: '1rem'}} >
            <Latex >{questionText}</Latex>
            </div>
            <br />
            Subject
            <TextField onChange={(e)=>setSubject(e.target.value)} />
            <br/>
            Chapter
            <TextField onChange={(e)=>setChapter(e.target.value)} />
            <br />
            standard
            <TextField onChange={(e)=>setStandard(e.target.value)} />
            <br />
            Correct Answer
            <TextField onChange={(e)=>setCorrectAnswer(e.target.value)} />
            <br />
            Solution
            <TextField onChange={(e)=>setSolution(e.target.value)} />
            <br />
            Option A - <Latex>{optionA}</Latex>
            <TextField fullWidth onChange={(e)=>setOptionA(e.target.value)}  />
            <br />
            Option B - <Latex>{optionB}</Latex>
            <TextField fullWidth onChange={(e)=>setOptionB(e.target.value)}  />
            <br />
            Option C - <Latex>{optionC}</Latex>
            <TextField fullWidth onChange={(e)=>setOptionC(e.target.value)}  />
            <br />
            Option D - <Latex>{optionD}</Latex>
            <TextField fullWidth onChange={(e)=>setOptionD(e.target.value)}  />
            <br />
            <Button type="submit" >Submit</Button>
            </form>
        </div>
    )
}

export default AddQuestions
