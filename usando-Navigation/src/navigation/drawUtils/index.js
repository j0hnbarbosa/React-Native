import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';



export const drawerHeaderNavigationOptions = title => ({ navigation }) => ({
  headerLeft: (
    <MaterialCommunityIcons
      name="menu"
      
      size={24}
      onPress={() => ''}
    />
  )
});