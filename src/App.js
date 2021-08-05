/*eslint-disable*/

import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./ui/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRoutes from './pages/login/routes/LoginRoutes.jsx'
import Checking from "./Checking";
import { Suspense } from "react";
import AddQuestions from "./pages/questions/AddQuestions";
import Loader from "./pages/common/Loader";
import QuestionLayout from "./pages/Student/component/QuestionLayout";


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      {/* <Suspense fallback={<div style={{textAlign: 'center'}}><Loader/></div>}> */}
    <Router>
          <Switch>
            <LoginRoutes />
          </Switch>
        </Router> 

        {/* <Checking />
        {/* <QuestionLayout /> */}
        {/* <AddQuestions /> */}
      </ThemeProvider>
    </>
  );
}

export default App;

