import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class WatchedFilmItem extends React.Component {

    render() {
        const { watchedFilm, displayDetailForFilm } = this.props
        return (
            <TouchableOpacity
            style={styles.main_container}
            onPress={() => displayDetailForFilm(watchedFilm.id)}>
                <View style={styles.main_container}>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={styles.image}
                            source={{uri: getImageFromApi(watchedFilm.poster_path)}}
                        />
                    </View>
                    <View style={styles.content_container}>
                        <Text style={styles.title_text}>{watchedFilm.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
      flex: 1,
      flexDirection: 'row'
  },
  title_text: {
    
  },
  content_container: {
    flex: 3,
    justifyContent: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 5
  },
})

export default WatchedFilmItem