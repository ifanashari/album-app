import React from "react";
import AlbumInterface from "../interfaces/AlbumInterface";
import UserInterface from "../interfaces/UserInterface";
import axios from "axios";

import Header from "../components/Header";
import FormFilter from "../components/FormFilter";
import AlbumItem from "../components/AlbumItem";

class Main extends React.Component<
  {},
  { albums: AlbumInterface[]; users: any; listAlbums: AlbumInterface[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = { albums: [], users: [], listAlbums: [] };
  }

  async componentDidMount() {
    try {
      const responseAlbums = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      const responseUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      this.setState(prevState => {
        return {
          ...prevState,
          albums: responseAlbums.data,
          users: responseUsers.data,
          listAlbums: responseAlbums.data
        };
      });
    } catch (err) {
      console.log(`get data album and user => ${err}`);
    }
  }

  handleFilter = (name: string, albumName: string) => {
    if (name || albumName) {
      const filteredUsers = this.state.users.filter((data: UserInterface) =>
        data.name.toLowerCase().includes(name.toLowerCase())
      );

      const filteredUsersId = filteredUsers.map(
        (data: UserInterface) => data.id
      );

      const filteredAlbums = this.state.albums.filter(
        (data: AlbumInterface) =>
          data.title.toLowerCase().includes(albumName.toLowerCase()) ||
          filteredUsersId.includes(data.userId)
      );

      this.setState(prevState => {
        return {
          ...prevState,
          listAlbums: filteredAlbums
        };
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          listAlbums: prevState.albums
        };
      });
    }
  };

  findSpecificUser = (id: Number) => {
    return this.state.users.find((data: UserInterface) => data.id === id);
  };

  render() {
    return (
      <div>
        <Header title="Welcome to album-app" subTitle="Filter album" />
        <FormFilter handleFilter={this.handleFilter} />
        <div className="container">
          <div className="row">
            {this.state.listAlbums.map((item: AlbumInterface) => {
              return (
                <div className="col-md-4 mb-3" key={item.id}>
                  <AlbumItem
                    album={item}
                    user={this.findSpecificUser(item.userId)}
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
export default Main;
