import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    render() {
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }

    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }
};

export default AlbumList;