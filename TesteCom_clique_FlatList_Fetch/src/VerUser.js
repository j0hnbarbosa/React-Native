import React from 'react';
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


mostra = () => {
  Alert.alert("Pressionadao!")
}

const VerUser = (props) => {
  return (
    <View style={styles.containerUser} >

      <View style={styles.containerImage}>
        <Image source={{ uri: props.item.picture.medium }} style={styles.imgUser} />
      </View>

      <View style={styles.containeTxtBtnUser}>

        <View style={styles.containerTxtUser}>
          <Text style={styles.txtUser}>{props.item.name.first} {props.item.name.last}</Text>
        </View>

        <View styles={styles.btnUserContainer}>
          <TouchableOpacity
            onPress={this.mostra}>
            <View style={styles.btnMoreInfo}>
              <Text style={styles.btnTxtMoreInfo}>More Info</Text>

            </View>

          </TouchableOpacity>
        </View>


      </View>

    </View>
  )
}

export default VerUser;