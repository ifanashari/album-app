import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Albums from "../pages/Albums";

const MainRoute: React.SFC<any> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/albums/:id" component={Albums} />
    </Switch>
  );
};

export default MainRoute;
