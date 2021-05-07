import React from "react";
import axios from "axios";
import AlbumInterface from "../../interfaces/AlbumInterface";
import PhotoInterface from "../../interfaces/PhotoInterface";
import UserInterface from "../../interfaces/UserInterface";
import Header from "../../components/Header";
import PhotoItem from "../../components/PhotoItem";

interface AlbumsStateInterface {
  album: AlbumInterface | null;
  user: UserInterface | null;
  photos: PhotoInterface[];
}

class FavoritePhotos extends React.Component<any, AlbumsStateInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      album: null,
      photos: [],
      user: null
    };
  }

  async componentDidMount() {
    try {
      const responseAlbum = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}`
      );

      const responsePhotos = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        {
          params: {
            albumId: this.props.match.params.id
          }
        }
      );

      const responseUser = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${responseAlbum.data.userId}`
      );

      const getStorage = localStorage.getItem("listFavorite");
      const parsedStorage = getStorage ? JSON.parse(getStorage) : [];
      const listAlbums = parsedStorage.map((data: any) => data.id);

      const photos = responsePhotos.data.filter((data: any) =>
        listAlbums.includes(data.id)
      );

      this.setState(prevState => {
        return {
          ...prevState,
          album: responseAlbum.data,
          photos,
          user: responseUser.data
        };
      });
    } catch (err) {
      console.log(`get data album, user, and photo => ${err}`);
    }
  }

  render() {
    return (
      <div>
        <Header title="Detail Album" />
        <div className="container">
          <div className="mb-3 text-center">
            <h1>{this.state.album?.title}</h1>
            <h3 className="mb-0">by: {this.state.user?.name}</h3>
          </div>
          <div className="row">
            {this.state.photos.map((item: PhotoInterface) => {
              return (
                <div className="col-md-4 mb-4" key={item.id}>
                  <PhotoItem photo={item} />
                </div>
              );
            })}
          </div>
        </div>
        {/* // subTitle={this.state.album ? this.state.album.title : "-"} */}
      </div>
    );
  }
}

export default FavoritePhotos;
