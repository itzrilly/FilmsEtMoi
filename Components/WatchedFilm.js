import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import WatchedFilmItem from './WatchedFilmItem'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import { connect } from 'react-redux'

class WatchedFilm extends React.Component {

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film " + idFilm)
        this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={this.props.watchedFilm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => ( 
                        <WatchedFilmItem 
                            watchedFilm={item} 
                            displayDetailForFilm={this._displayDetailForFilm}    
                        /> 
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    watchedFilm: state.toggleWatch.watchedFilm
  }
}

export default connect(mapStateToProps)(WatchedFilm)