// import React from 'react'
// // import MathJax from '÷'
// import TextField from '@material-ui/core/TextField';


// const Checking = () => {
//     const [check, setCheck] = React.useState("");


//     require('mathjax').init({
//         loader: {load: ['input/tex', 'output/svg']}
//       }).then((MathJax) => {
//         const svg = MathJax.tex2svg('\\frac{1}{x^2-1}', {display: true});
//         console.log(MathJax.startup.adaptor.outerHTML(svg));
//       }).catch((err) => console.log(err.message));
//     return (
//         <div>
//             <TextField
//                 id="standard-multiline-flexible"
//                 multiline
//                 placeholder="Username"
//                 rowsMax={4}
//                 value={check}
//                 onChange={(e) => setCheck(e.target.value)}
//             />
//         </div>
//     )
// }

// export default Checking

// import * as React from 'react'
 
// import { MathComponent } from 'mathjax-react'
// import TextField from '@material-ui/core/TextField';

 
// const Checking = () => {
//     const [check, setCheck] = React.useState("");


  
//     return (
//         <>
        // <TextField
        //         id="standard-multiline-flexible"
        //         multiline
        //         placeholder="Username"
        //         rowsMax={4}
        //         value={check}
        //         onChange={(e) => setCheck(e.target.value)}
        //     />
//       <MathComponent tex={String.raw`${check}`} />
//       </>
//     )
  
// }

// export default Checking
// import React, { useState } from 'react'
// import { addStyles, StaticMathField } from 'react-mathquill'
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// import Axios from 'axios';
 
// // inserts the required css to the <head> block.
// // you can skip this, if you want to do that by yourself.
// addStyles()
 
// const Checking = () => {
//   const [latex, setLatex] = useState()
//   const [data, setdata] = useState()
//   const handleClick = () => {
//       Axios.post('http://localhost:7000/api/student/check', 
//       {
//           questionData: latex + data
//       })
//   } 

//   React.useEffect(() => {
//       Axios.get('http://localhost:7000/api/student/check').then(res=>setLatex((res.data.questions[0].questionData)))
      
//   }, [])
 
//   return (
//     <div style={{textAlign: "center"}} >
//         <TextField
//                 id="standard-multiline-flexible"
//                 multiline
//                 placeholder=""
//                 rowsMax={4}
//                 value={data}
//                 style={{marginBottom: "3rem"}}
//                 onChange={(e) => setdata(e.target.value)}
//             />
        // <TextField
        //         id="standard-multiline-flexible"
        //         multiline
        //         placeholder=""
        //         rowsMax={4}
        //         value={latex}
        //         style={{marginBottom: "3rem"}}
        //         onChange={(e) => setLatex(e.target.value)}
        //     />
//             <Button onClick={handleClick} >Done</Button>
//             <br /> 
//       {/* <MathField
//         latex={latex}
//         onChange={(mathField) => {
//           setLatex(mathField.latex())
//         }}
//       /> */}
//       <StaticMathField>
//           {latex}
//       </StaticMathField>
//     </div>
//   )
// }

// export default Checking

import React from 'react'
// const Latex = require('react-latex');
import Latex from 'react-latex';
import Axios from 'axios';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Checking = () => {

        const [latex, setLatex] = React.useState()
        const handleClick = () => {
            Axios.post('http://localhost:7000/api/student/check', 
            {
                questionData: latex
            })
        } 
      
        React.useEffect(() => {
            Axios.get('http://localhost:7000/api/student/check').then(res=>setLatex((res.data.questions[0].questionData)))
            
        }, [])
    return (
        <div>
            <TextField
                id="standard-multiline-flexible"
                multiline
                placeholder=""
                rowsMax={4}
                // value={latex}
                style={{marginBottom: "3rem", marginLeft: "2rem"}}
                onChange={(e) => setLatex(e.target.value)}
            />
            <p>
                {/* <Latex>What is $(3\times 4) \div (5-3)$</Latex>
                <Latex>What is $[ x^n + y^n = z^n ]$</Latex>
                <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>       
                <Latex> $\alpha$</Latex>             */}
                <br />
                {/* {latex} */}
                <Latex>{latex}</Latex>       
                <Button onClick={handleClick} >Submt</Button> <br /> 
            </p>
        </div>
    )
}

export default Checking

