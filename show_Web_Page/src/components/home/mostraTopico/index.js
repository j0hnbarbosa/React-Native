import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles';

const MostraTopico = (props) => {
  const imgDefault = 'https://styles.redditmedia.com/t5_2qh7d/styles/communityIcon_mcc4gmbv1tl11.png';

  return (
    < TouchableOpacity
      onPress={() => props.navigation.navigate("ListaNoticiasTopicoSelecionado", { URL: props.item.data.display_name_prefixed })}
    >
      <View style={styles.ContainerSites}>
        <View style={styles.ContainerUnicoSiteShow}>
          <Text style={styles.txtSiteStyle}>{props.item.data.display_name}</Text>
        </View>
        <View style={styles.ContainerUnicaImageShow}>
          <Image
            style={styles.imgSiteStyle}
            source={{ uri: props.item.data.icon_img !== "" ? props.item.data.icon_img : imgDefault }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default MostraTopico;