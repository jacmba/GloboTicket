import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tickets')}
        style={styles.button}>
        <Text style={styles.buttontext}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('News')}>
        <Text style={styles.buttontext}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttontext}>Contact us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 5,
    marginLeft: 5,
  },
  buttontext: {
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Menu;
