import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Albums from "../pages/Albums";
import Users from "../pages/Users";

const MainRoute: React.SFC<any> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/albums/:id" component={Albums} />
      <Route exact path="/users/:id" component={Users} />
    </Switch>
  );
};

export default MainRoute;
