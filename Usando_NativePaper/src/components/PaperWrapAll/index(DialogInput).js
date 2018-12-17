import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DialogInput from 'react-native-dialog-input';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogVisible: false,
      textoMuda: 'Recuperar senha'
    }
  }
  showDialog(isShow) {
    this.setState({ isDialogVisible: isShow });
  }

  sendInput(inputText) {
    this.setState({ textoMuda: inputText });
    console.log("sendInput (DialogInput#1): " + inputText);
  }

  render() {
    const { textoMuda } = this.state;
    return (
      <View style={styles.container}>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={textoMuda}
          message={"Digite seu E-mail"}
          hintInput={"E-mail"}
          submitText={"Enviar"}
          submitInput={(inputText) => { this.sendInput(inputText); }}
          closeDialog={() => { this.showDialog(false) }}
        >
        </DialogInput>
        <TouchableOpacity onPress={() => { this.showDialog(true) }} style={{ padding: 5 }}>
          <Text>Show DialogInput #1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});