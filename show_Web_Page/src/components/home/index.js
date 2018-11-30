import React, { Component } from 'react';
import styles from './styles';
import MostraTopico from './mostraTopico';
import {
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReddit: [],
      isLoading: true,

    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://www.reddit.com/subreddits/default.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dataReddit: responseJson.data.children, isLoading: false });
      })
      .catch((erro) => '')
  }

  render() {
    const { dataReddit, imgDefault } = this.state;


    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    } else {
      console.log("Aqui2: ", dataReddit[10].data.header_img);
    }
    return (
      <View style={styles.Container}>
        <View style={styles.ContaineAllSites}>

          {
            <FlatList
              data={dataReddit}
              renderItem={({ item }) => (<MostraTopico navigation={this.props.navigation} item={item} />)
              }
              keyExtractor={(item, index) => index.toString()}
            />
          }
        </View>
      </View >
    );
  }
}

export default Home;