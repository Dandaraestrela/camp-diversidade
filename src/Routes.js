import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./layout/home";
import { QuizHair } from "./layout/quizHair";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quiz" component={QuizHair} />
      </Switch>
    </Router>
  );
}

export default Routes;
