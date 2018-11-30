import React, { Component } from 'react';
import { TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import MostraNoticias from './mostraNoticias';

class ListaNoticiasTopicoSelecionado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReddit: [],
      isLoading: true,

    };
  }

  fetchData = (topico) => {
    // fetch(`https://www.reddit.com/${topico}/hot.json`)
    fetch(`https://www.reddit.com/r/aww/hot.json`)
      .then((response) => response.json())
      .then((responseJson) => { this.setState({ dataReddit: responseJson.data.children, isLoading: false }) })
      .catch((error) => '');
  }

  render() {
    const { topico } = this.props;
    console.log("Here1: ", topico);
    const { dataReddit } = this.state;

    this.fetchData(topico);
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.Container}>
        <View style={styles.ContaineAllSites}>

          {
            <FlatList
              data={dataReddit}
              renderItem={({ item }) => (<MostraNoticias navigation={this.props.navigation} item={item} />)
              }
              keyExtractor={(item, index) => index.toString()}
            />
          }
        </View>
      </View >
    );
  }
}

export default ListaNoticiasTopicoSelecionado;