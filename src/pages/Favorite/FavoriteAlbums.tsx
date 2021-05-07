import axios from "axios";
import React from "react";
import AlbumItem from "../../components/AlbumItem";
import Header from "../../components/Header";
import AlbumInterface from "../../interfaces/AlbumInterface";
import UserInterface from "../../interfaces/UserInterface";

class FavoriteAlbums extends React.Component<
  {},
  { albums: AlbumInterface[]; users: any }
> {
  constructor(props: {}) {
    super(props);
    this.state = { albums: [], users: [] };
  }

  async componentDidMount() {
    try {
      const responseAlbums = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      const responseUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const getStorage = localStorage.getItem("listFavorite");
      const parsedStorage = getStorage ? JSON.parse(getStorage) : [];
      const listAlbums = parsedStorage.map((data: any) => data.albumId);

      const albums = responseAlbums.data.filter((data: any) =>
        listAlbums.includes(data.id)
      );

      this.setState(prevState => {
        return {
          ...prevState,
          albums,
          users: responseUsers.data
        };
      });
    } catch (err) {
      console.log(`get data album and user => ${err}`);
    }
  }

  findSpecificUser = (id: Number) => {
    return this.state.users.find((data: UserInterface) => data.id === id);
  };

  render() {
    return (
      <div>
        <Header title="Favorite album" />
        <div className="container">
          <div className="row">
            {this.state.albums.map((item: AlbumInterface) => {
              return (
                <div className="col-md-4 mb-4" key={item.id}>
                  <AlbumItem
                    album={item}
                    user={this.findSpecificUser(item.userId)}
                    isFavorite={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteAlbums;
