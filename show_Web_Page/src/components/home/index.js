import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
//import styles from './style';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
  },
  ContaninerBuscar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  inputTexto: {
    fontSize: 85,
    color: 'blue',
  },
  ContainerBtnBusca: {
    backgroundColor: "#2979ff",
    borderRadius: 20,
    padding: 5,
    marginLeft: 5,
  },
  txtBtnBuscar: {
    fontSize: 25,
    color: '#CECECE',
    fontWeight: 'bold',
  },
  showownLine: {
    borderWidth: 3,
    borderBottomColor: '#CECECE',
    marginLeft: 4,
    marginRight: 4,
    marginTop: 20,
  },
  ContaineVariadosAssuntos: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  txtVariadosAssuntos: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  ContaineAllSites: {

  },
  ContainerSites: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#CECECE',
    padding: 10,
    margin: 5,
    justifyContent: 'space-between',
  },
  ContainerUnicoSiteShow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSiteStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00695f',
  },
  imgSiteStyle: {
    width: 180,
    height: 90,
    borderRadius: 100,
  }

});


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
    const { dataReddit } = this.state;


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
        <View style={styles.ContaninerBuscar}>
          <View style={styles.ContaineInput}>
            <TextInput
              sytyle={styles.inputTexto}
              placeholder='Faça sua busca...'
            />
          </View>
          <View style={styles.ContainerBtnBusca}>
            <TouchableOpacity>
              <Text style={styles.txtBtnBuscar}>BUSCAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.showownLine} />
        <View style={styles.ContaineVariadosAssuntos}>
          <Text style={styles.txtVariadosAssuntos}>VARIADOS ASSUNTOS</Text>
        </View>
        <View style={styles.ContaineAllSites}>

          {
            <FlatList
              data={dataReddit}
              renderItem={({ item }) => (
                < TouchableOpacity
                  onPress={() => this.props.navigation.navigate("WebViewPage")}
                >
                  <View style={styles.ContainerSites}>
                    <View style={styles.ContainerUnicoSiteShow}>
                      <Text style={styles.txtSiteStyle}>{item.data.display_name}</Text>
                    </View>
                    <View style={styles.ContainerUnicaImageShow}>
                      <Image
                        style={styles.imgSiteStyle}
                        source={{ uri: 'https://assets3.thrillist.com/v1/image/2444807/size/tmg-article_tall;jpeg_quality=20.jpg' }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )
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