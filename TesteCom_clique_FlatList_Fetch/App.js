import React from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, View, FlatList, Text, TouchableHighlight, Alert, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 60,
  },
  box: {
    flex: 1,
    height: 100,
    minWidth: 200,
    //backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 1,
    fontWeight: 'bold',
    color: '#2979ff',
    fontSize: 30,
  },
  anoTitulo: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  boxTitulo: {
    // height: 80,
    minWidth: 200,
    //backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }, tituloLista: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 50,
  }

})

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      clicked: true,
    };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  _onPressButton = () => {

    this.setState({ clicked: !(this.state.clicked) });
    const { clicked } = this.state;
    Alert.alert("Aqui " + clicked);
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    let pic = {
      // uri: 'https://www.planwallpaper.com/static/cache/c0/5b/c05b550fac3b490b5d78737f999d46a8.jpg'
      uri: 'http://thegeeko.com/wp-content/uploads/2015/10/Back_to_the_future_feature2-400x300.jpg'
    };
    const { clicked, isLoading } = this.state;
    console.log("clicked");
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View style={styles.boxTitulo} ><Text style={styles.tituloLista}> Lista de Filmes</Text></View>
        {
          <View style={styles.container}>
            {/* <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              {
                clicked ?
                  <View style={styles.box} >
                    <Text style={styles.titulo} > {this.state.clicked + ""} {'item.title'}</Text>
                    <Text style={styles.anoTitulo} > {'item.releaseYear'}</Text>
                  </View>
                  :
                  <View style={styles.box} >
                    <Image source={pic} style={{ width: 382, height: 90 }} />
                  </View>
              }
            </TouchableHighlight> */}

            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) =>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                  {
                    clicked ?
                      <View style={styles.box} >
                        <Text style={styles.titulo} > {this.state.clicked + ""} {item.title}</Text>
                        <Text style={styles.anoTitulo} > {item.releaseYear}</Text>
                      </View>
                      :
                      <View style={styles.box} >
                        <Image source={pic} style={{ width: 382, height: 90 }} />
                      </View>
                  }
                </TouchableHighlight>
              }
              keyExtractor={({ id }, index) => id}
            />
          </View>
        }
      </View>
    );
  }
}

