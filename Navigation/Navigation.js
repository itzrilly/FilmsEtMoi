import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'
import WatchedFilm from '../Components/WatchedFilm'
import Test from '../Components/Test'

const SearchStackNavigator = createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Rechercher'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })
  
  const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        title: 'Favoris'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })

  const NewsStackNavigator = createStackNavigator({
    News: {
      screen: News,
      navigationOptions: {
        title: 'News'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })

  const WatchedFilmStackNavigator = createStackNavigator({
    WatchedFilm: {
      screen: WatchedFilm,
      navigationOptions: {
        title: 'Mes Films Vus'
      }
    },
    FilmDetail: {
      screen: FilmDetail
    }
  })
  
  const MoviesTabNavigator = createBottomTabNavigator(
    {
        /*Test: {
            screen: Test
        },*/
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                  return <Image
                  source={require('../Images/ic_search.png')}
                  style={styles.icon}/>
              }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                  return <Image
                  source={require('../Images/ic_favorite.png')}
                  style={styles.icon}/>
              }
            }
        },
        News: {
          screen: NewsStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <Image
              source={require('../Images/ic_fiber_new.png')}
              style={styles.icon} />
            }
          }
        },
        WatchedFilm: {
          screen: WatchedFilmStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <Image
                source={require('../Images/ic_selected.png')}
                style={styles.icon}
              />
            }
          }
        }
      },
        {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true
        }
        }
  )
  
  const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
  })
  
  export default createAppContainer(MoviesTabNavigator)