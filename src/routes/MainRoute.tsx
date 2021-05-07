import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Albums from "../pages/Albums";
import Users from "../pages/Users";
import FavoriteAlbums from "../pages/Favorite/FavoriteAlbums";
import FavoritePhotos from "../pages/Favorite/FavoritePhotos";

const MainRoute: React.SFC<any> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/albums/:id" component={Albums} />
      <Route exact path="/users/:id" component={Users} />
      <Route exact path="/favorite" component={FavoriteAlbums} />
      <Route exact path="/favorite/:id" component={FavoritePhotos} />
    </Switch>
  );
};

export default MainRoute;
