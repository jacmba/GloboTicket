import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globologo}
        source={require('./images/_Export_globoticket-bug-black.png')}
      />
      <Text style={styles.title}>Welcome to GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </View>
  );
};

const introText = `Quid ad utilitatem tantae pecuniae? Ut nemo dubitet, eorum omnia
quid sequi, quid fuguere debeant?
Lorem ipsum dolor sit amet`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  globologo: {
    height: 100,
    width: 150,
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Regular',
  },
  textcontainer: {
    textAlign: 'center',
    padding: 10,
  },
  content: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
  },
  introText: {},
});

export default Home;
