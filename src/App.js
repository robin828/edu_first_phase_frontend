/*eslint-disable*/

import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./ui/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRoutes from './pages/login/routes/LoginRoutes.jsx'
import Checking from "./Checking";
import { Suspense } from "react";
import AddQuestions from "./pages/questions/AddQuestions";

import QuestionLayout from "./pages/Student/component/QuestionLayout";


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
    <Router>
          <Switch>
            <LoginRoutes />
          </Switch>
        </Router> 
        </Suspense>
        {/* <Checking />
        {/* <QuestionLayout /> */}
        {/* <AddQuestions /> */}
      </ThemeProvider>
    </>
  );
}

export default App;

