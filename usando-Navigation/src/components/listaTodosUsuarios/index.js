import React from 'react';
import styles from './style';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';

import MostraUsuario from '../mostraUsuario';

export default class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      clicked: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function () {
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    console.debug("Aqui propps: ", this.props);
    const { dataSource, isLoading } = this.state;
    
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    
    return (

      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.fetchData}
        >
          <View style={styles.listaUsers}>
            <Text style={styles.txtListUsers}>Refresh USUÁRIOS</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={dataSource}
          renderItem={({ item }) =>
            (
              <MostraUsuario navigation={this.props.navigation} item={item} />
            )
          }
        />
      </View>
    );
  }
}

