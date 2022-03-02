import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const News = () => {
  const [isLoaded, setDataLoaded] = useState(true);
  const [storyData, setStoryData] = useState();

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums/1/photos',
      );
      const stories = await response.json();
      setStoryData(stories);
      setDataLoaded(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(storyData);

  const newsItem = ({item}) => (
    <View style={StyleSheet.storylist}>
      <Image style={styles.thumb} source={{uri: item.url}} />
      <Text style={styles.storytext}>{item.title}</Text>
      <Text style={styles.storytext}>{item.url}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={storyData}
          renderItem={newsItem}
          keyExtractor={item => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  storylist: {
    paddingBottom: 20,
  },
  thumb: {
    height: 100,
    width: '100%',
  },
  storytext: {
    padding: 10,
  },
});

export default News;
