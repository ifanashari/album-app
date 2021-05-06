import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";

const MainRoute: React.SFC<any> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default MainRoute;
