import { CreativeKit, LoginKit } from '@snapchat/snap-kit-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

/*
Eric Furukawa
3/7/2023


Scrolling card effect:
https://snack.expo.dev/H1CnjIeDb?platform=ios
https://stackoverflow.com/questions/43212931/react-native-horizontal-scroll-view-pagination-preview-next-page-card
*/

const { width } = Dimensions.get('window');

const isValidHttpUrl = (url) => {
  let test;
  try {
    test = new URL(url);
  } catch (_) {
    return false;
  }

  return url.startsWith('https:') || url.startsWith('http:');
};

export default function CreativeKitScreen() {
  const sharePicture = (url) => {
    //LoginKit.login();
    CreativeKit.sharePhoto({
      content: {
        uri: 'file:///C:/Users/furuk/Documents/React_Project/ExpoProject/assets/Photos/Soup.jpg',
      },
      caption: "caption string",
    })
    /*.catch((error) => {
      Alert.alert(error);
    })*/;
  };

  const doAlert = (alert) => {
    Alert.alert(alert);
  };

  // file:///C:/Users/furuk/Documents/React_Project/ExpoProject/assets/Photos/Soup.jpg

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleText}>Snapchat Application</Text>
      <ScrollView ref={(scrollView) => {this.scrollView=scrollView}} style={styles.scrollView} horizontal={true} decelerationRate={0} snapToInterval={width-50} snapToAlignment={"center"} contentInset={{top: -50, left:30, bottom: -50, right: 30}}>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: 'https://i.imgur.com/tkDnkwb.jpg'}}></Image>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePicture('https://i.imgur.com/tkDnkwb.jpg'); 
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() => { sharePicture('https://i.imgur.com/tkDnkwb.jpg'); }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() => { sharePicture('https://i.imgur.com/tkDnkwb.jpg'); }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() => { sharePicture('https://i.imgur.com/tkDnkwb.jpg'); }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() => { sharePicture('https://i.imgur.com/tkDnkwb.jpg'); }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// justify, align

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    overflow: 'hidden',
  },
  titleText: {
    top: 20,
    left: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  images: {
    flex: 5,
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  box: {
    marginTop: 100,
    backgroundColor: '#3C4E7A',
    width: width - 80,
    margin: 15,
    height: 500,
    borderRadius: 40,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  button: {
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width: '90%',
    borderColor: 'yellow',
    borderWidth: 5,
    borderRadius: 1,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
});
