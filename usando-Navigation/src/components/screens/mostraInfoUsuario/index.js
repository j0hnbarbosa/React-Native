import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerImgName: {
    
    margin: 20,
    borderColor: "#cecece",
    borderWidth: 2,
    borderRadius: 10,
  },
  ContainerImgUsuario: {
    margin: 10,
    borderColor: '#cecece',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 4,

  },
  imgUaurio: {
    width: 340,
    height: 220,
    borderRadius: 3,

  },
  ContainerNomeUsuario: {
    flexDirection: 'row'
,    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  txtNomeUsario: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'arial',

  },
  ContaineContaoUsuario: {
    paddingBottom: 8,
  },
  InfosUsuario: {
    flex: 1,
    flexDirection: 'column',
    width: 370,
    borderColor: '#cecece',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
    padding: 5,
  },
  DetalheUsuario: {
    flexDirection: 'row',
    borderColor: '#cecece',
    borderWidth: 2,
    justifyContent: 'space-between',
  },


});

const MostraInfoUusario = (props) => {
  const all = props.navigation.getParam('item', 'NO-item')
  return (
    <View style={styles.container}>

      <View style={styles.ContainerImgName}>
        <View style={styles.ContainerImgUsuario}>
          <Image
            source={{ uri: all.picture.large }}
            style={styles.imgUaurio}
          />
        </View>
        <View style={styles.ContainerNomeUsuario}>
          <Text style={styles.txtNomeUsario}>{all.name.first } </Text>
          <Text style={styles.txtNomeUsario}>{all.name.last}</Text>
        </View>
      </View>
      <View style={styles.InfosUsuario}>
        <View style={styles.ContaineContaoUsuario}>
          <View style={styles.DetalheUsuario}>
            <Text>Telefone:</Text>
            <Text>{all.phone}</Text>
          </View>
          <View style={styles.DetalheUsuario}>
            <Text>Email:</Text>
            <Text>{all.email}</Text>
          </View>
        </View>
        <View style={styles.ContaineContaoUsuario}>
          <View style={styles.DetalheUsuario}>
            <Text>Data Nascimento:</Text>
            <Text>{all.dob.date}</Text>
          </View>

        </View>
        <View style={styles.ContaineContaoUsuario}>

          <View style={styles.DetalheUsuario}>
            <Text>Endereço:</Text>
            <Text>{all.location.street}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MostraInfoUusario;