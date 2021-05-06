import React from "react";
import Header from "../components/Header";
import AlbumItem from "../components/AlbumItem";
import AlbumInterface from "../interfaces/AlbumInterface";
import UserInterface from "../interfaces/UserInterface";
import axios from "axios";

class Main extends React.Component<
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

      console.log(responseAlbums);

      this.setState(prevState => {
        return {
          ...prevState,
          albums: responseAlbums.data,
          users: responseUsers.data
        };
      });
    } catch (err) {
      console.log(`get data album and user => ${err}`);
    }
  }

  handleFilter = (keyword: String) => {
    console.log(keyword);
  };

  findSpecificUser = (id: Number) => {
    return this.state.users.find((data: UserInterface) => data.id === id);
  };

  render() {
    return (
      <div>
        <Header handleFilter={this.handleFilter} />
        <div className="container mt-3">
          <div className="row">
            {this.state.albums.map((item: AlbumInterface) => {
              return (
                <div className="col-md-4 mb-3" key={item.id}>
                  <AlbumItem
                    album={item}
                    user={this.findSpecificUser(item.id)}
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
