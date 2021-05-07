import React from "react";
import axios from "axios";
import "../../assets/css/detail-user.css";

import Header from "../../components/Header";
import AlbumInterface from "../../interfaces/AlbumInterface";
import UserInterface from "../../interfaces/UserInterface";
import UserSection from "../../components/UserSection";
import AlbumItem from "../../components/AlbumItem";

class Users extends React.Component<
  any,
  { albums: AlbumInterface[]; user?: UserInterface | null }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      albums: [],
      user: null
    };
  }

  async componentDidMount() {
    try {
      const responseAlbums = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`,
        {
          params: {
            userId: this.props.match.params.id
          }
        }
      );
      const responseUsers = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      );
      console.log({
        responseAlbums,
        responseUsers
      });
      this.setState(prevState => {
        return {
          ...prevState,
          albums: responseAlbums.data,
          user: responseUsers.data
        };
      });
    } catch (err) {
      console.log(`get data album and user => ${err}`);
    }
  }

  render() {
    return (
      <div>
        <Header title="Detail User" />
        <UserSection user={this.state.user} />
        <div className="container mt-5">
          <div className="row">
            {this.state.albums.map((item: AlbumInterface) => {
              return (
                <div className="col-md-4 mb-4" key={item.id}>
                  <AlbumItem album={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
