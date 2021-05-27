import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from './GlobalContext';
import { Home } from "./layout/home";
import { QuizHair } from "./layout/quizHair";
import { Recommendation } from "./layout/recommendation";
import { Time } from "./layout/time";
import { About } from "./layout/about";

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalContext>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quiz" component={QuizHair} />
        <Route exact path="/Recomendacoes" component={Recommendation} />
        <Route exact path="/Tunel" component={Time} />
        <Route exact path="/Sobre" component={About} />
        </GlobalContext>
      </Switch>
    </Router>
  );
}

export default Routes;
