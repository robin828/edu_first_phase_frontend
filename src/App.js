import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import theme from "./ui/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRoutes from './pages/login/routes/LoginRoutes.jsx'
import Checking from "./Checking";

import AddQuestions from "./pages/questions/AddQuestions";

import QuestionLayout from "./pages/Student/component/QuestionLayout";


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
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

