import React from 'react';
import Aqui from './Aqui';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';

import VerUsers from './VerUser';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerUser: {
    height: 200,
    flexDirection: 'row',
    borderColor: "#999",
    borderWidth: 5,
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  containerImage: {
    borderColor: "#999",
    borderWidth: 3,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 100,
    margin: 10,
  },
  imgUser: {
    width: 130,
    height: 150,

    borderRadius: 100,
  },
  containeTxtBtnUser: {
    flex: 1,
    flexDirection: "column",
    borderColor: "#999",
    borderWidth: 1,

  },
  containerTxtUser: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  txtUser: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 24,
  },
  btnUserContainer: {

    height: 200,
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    backgroundColor: "black",
    padding: 200,
    margin: 200,
    borderColor: "pink",
    borderWidth: 5,

  },

  btnMoreInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#841584",
    margin: 25,
    borderRadius: 10,
  },
  btnTxtMoreInfo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  listaUsers: {

    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  txtListUsers: {
    fontSize: 25,
    fontWeight: "bold",
    borderColor: "#999",
    borderWidth: 2,
    padding: 10,
    borderRadius: 70,
    backgroundColor: "#cecece",
  }
});


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
    return fetch('https://randomuser.me/api/?results=50')
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

  _onPressButton = () => {
    this.setState({ clicked: !(this.state.clicked) });
    const { clicked } = this.state;
    Alert.alert("Aqui " + clicked);
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    const { dataSource, isLoading } = this.state;
    let incKey = 0;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    console.log("Aqui!", dataSource[0].gender);
    return (

      <View style={styles.container}>
        <Aqui />
        <View style={styles.listaUsers}>
          <Text style={styles.txtListUsers}>LISTA DE USUÁRIOS</Text>
        </View>

        <FlatList
          data={dataSource}
          renderItem={({ item }) =>
            (
              <VerUsers item={item} />
            )

          }
        />

      </View>
    );
  }
}

