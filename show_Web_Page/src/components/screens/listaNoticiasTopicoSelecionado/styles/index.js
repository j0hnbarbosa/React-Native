import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
