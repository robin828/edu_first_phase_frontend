import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Latex from 'react-latex'
import axios from 'axios'
import AWS from 'aws-sdk'




const AddQuestions = () => {
    // const config = {
    //     bucketName: 'edu-solutiion-images',
    //     // dirName: 'photos' /* optional */,
    //     region: 'ap-south-1',
    //     accessKeyId: 'AKIATDYAY4REJXENY5K7',
    //     secretAccessKey: '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',
    // }

// const formData = new formData();

    const [questionText, setQuestionText] = useState('')
    const [subject, setSubject] = useState('')
    const [chapter, setChapter] = useState('')
    const [standard, setStandard] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [questionImage, setQuestionImage] = useState();
    const [solution, setSolution] = useState()
    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [optionC, setOptionC] = useState('')
    const [optionD, setOptionD] = useState('')
    const [testName, setTestName] = useState();
    const [progress , setProgress] = useState(0);
    const [type, setType] = useState("");
    // const [solution , setSolution] = useState(0);



    const [file, setFile] = useState();
    const [files, setFiles] = useState();
    // const [questionFile, setFile] = useState();
    let mainOption = []
    // const url = "http://localhost:9000/api/addquestion"
    // const url = "https://api.myonlineedu.in/api/addquestion"
    const url = "http://localhost:9000/api/add/testquestion"

    const handleSubmit = async (e) => {
        e.preventDefault()
        mainOption.push(optionA, optionB, optionC, optionD)

        const payload = {
            questionText: questionText,
            subject: subject,
            chapter: chapter,
            className: standard,
            correctAnswer: correctAnswer,
            solution: solution,
            questionImage: questionImage,
            options: mainOption,
            testName: 'PAP-1',
            examName: 'JEE Mains',
            type: "MCQ"
            // solution:
        }
        if(correctAnswer==="") {
            console.log("empty")
        }
        else {
            await axios
            .post(url, payload)
            .then((res) => console.log(res))
        console.log(subject)
        console.log(mainOption, '*')
        console.log(
            questionText,
            subject,
            chapter,
            standard,
            correctAnswer,
            solution,
            type
        )
        setSolution("");
        setQuestionImage("");
        }
        // console.log(payload, "{}{}{")
        
    }
    const handleChange = (e) => {
        console.log(e.target.files)
        // const params = {
        //     // ACL: 'public-read',
        //     Body: e.target.files[0],
        //     Bucket: S3_BUCKET,
        //     Key: e.target.files[0].name
        // };

        setSolution(e.target.files[0].name);

        // myBucket.putObject(params)
        //     .on('httpUploadProgress', (evt) => {
        //         setProgress(Math.round((evt.loaded / evt.total) * 100))
        //     })
        //     .send((err) => {
        //         console.log("kooo")
        //         if (err) console.log(err)
        //     })
    }
    const handleQuestionImage = (e) => {
        console.log(e.target.files)
        // const params = {
        //     // ACL: 'public-read',
        //     Body: e.target.files[0],
        //     Bucket: S3_BUCKET,
        //     Key: e.target.files[0].name
        // };
        // alert(e.target.files[0].name)
        setQuestionImage(e.target.files[0].name);

        // myBucket.putObject(params)
        //     .on('httpUploadProgress', (evt) => {
        //         setProgress(Math.round((evt.loaded / evt.total) * 100))
        //     })
        //     .send((err) => {
        //         console.log("kooo")
        //         if (err) console.log(err)
        //     })
    }
    return (
        <div style={{ marginLeft: '2rem' }}>
            <form onSubmit={handleSubmit}>
                QuestionText
                <TextField
                    id="standard-multiline-flexible"
                    multiline
                    fullWidth
                    placeholder=""
                    // value={latex}
                    style={{ marginBottom: '3rem', marginLeft: '2rem' }}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
                {/* <TextField fullWidth onChange={(e)=>setQuestionText(e.target.value)} /> */}
                <div style={{ fontSize: '1rem' }}>
                    <Latex>{questionText}</Latex>
                </div>
                <input type="file" value={files} onChange={(e)=>handleQuestionImage(e)} />
                <br />
                Subject
                <TextField onChange={(e) => setSubject(e.target.value)} />
                <br />
                Chapter
                {/* <TextField onChange={(e) => setTestName(e.target.value)} />
                <br />
                Test Name */}
                <TextField onChange={(e) => setChapter(e.target.value)} />
                <br />
                standard
                <TextField onChange={(e) => setStandard(e.target.value)} />
                <br />
                Correct Answer
                <TextField onChange={(e) => setCorrectAnswer(e.target.value)} />
                <br />
                {/* Solution
                <TextField onChange={(e) => setSolution(e.target.value)} /> */}
                <br />
                Option A - <Latex>{optionA}</Latex>
                <TextField
                    fullWidth
                    onChange={(e) => setOptionA(e.target.value)}
                />
                <br />
                Option B - <Latex>{optionB}</Latex>
                <TextField
                    fullWidth
                    onChange={(e) => setOptionB(e.target.value)}
                />
                <br />
                Option C - <Latex>{optionC}</Latex>
                <TextField
                    fullWidth
                    onChange={(e) => setOptionC(e.target.value)}
                />
                <br />
                Option D - <Latex>{optionD}</Latex>
                <TextField
                    fullWidth
                    onChange={(e) => setOptionD(e.target.value)}
                />
                <br />
                <Button type="submit">Submit</Button>
                <br />
                <input type="file" value={file} onChange={(e)=>handleChange(e)} />
                <img src="https://edu-solutiion-images.s3.ap-south-1.amazonaws.com/kin-Q7.png" alt={`https://edu-solutiion-images.s3.ap-south-1.amazonaws.com/${solution}`} />
            </form>
            <br />
            <br />
            <br />
        </div>
    )
}

export default AddQuestions
