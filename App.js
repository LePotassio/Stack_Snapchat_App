import { CreativeKit, LoginKit } from '@snapchat/snap-kit-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, SafeAreaView, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

import exampleImage from './assets/Photos/Soup.jpg'
const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

import exampleSticker from './assets/Photos/Chef.jpg'
const exampleStickerUri = Image.resolveAssetSource(exampleSticker).uri;

import exampleImage2 from './assets/Photos/stock.jpg'
const exampleImageUri2 = Image.resolveAssetSource(exampleImage2).uri;

import exampleSticker2 from './assets/Photos/Cold.jpg'
const exampleStickerUri2 = Image.resolveAssetSource(exampleSticker2).uri;

import RNFetchBlob from 'rn-fetch-blob';
/*
import CreativeKitScreen from './CreativeKitScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
*/

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

  return url.startsWith('https:') || url.startsWith('http:') || true;
};

export default function App() {
  const [caption, setCaption] = useState('');
  const [caption1, setCaption1] = useState('');
  const [caption2, setCaption2] = useState('');
  const [caption3, setCaption3] = useState('');
  const [caption4, setCaption4] = useState('');

  const sharePicture = (url, stickerUrl) => {
    //LoginKit.login();
    CreativeKit.sharePhoto({
      content: {
        uri: url,
      },
      sticker: {
        uri: stickerUrl,
        width: 200,
        height: 200,
        posX: 0.2,
        posY: 0.7,
        rotationDegreesInClockwise: 0,
        isAnimated: false,
     },
      caption: caption,
    })
    /*.catch((error) => {
      Alert.alert(error);
    })*/;
  };

  const sharePictureCheck = (url, stickerUrl) => {
    if (isValidHttpUrl(url)) {
      RNFetchBlob.config({
        fileCache: true,
      })
      .fetch('GET', url)
      .then((res) => {
        if (isValidHttpUrl(stickerUrl)) {
          RNFetchBlob.config( {
            fileCache: true,
          })
          .fetch('GET', stickerUrl)
          .then((stickerRes) => {
            sharePicture(`file://${res.data}`, `file://${stickerRes.data}`);
          });
        }
        else {
          sharePicture(`file://${res.data}`, "");
        }
      });
    }
  };

  const doAlert = (alert) => {
    Alert.alert(alert);
  };

  // file:///C:/Users/furuk/Documents/React_Project/ExpoProject/assets/Photos/Soup.jpg

  return (
    /*
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="CreativeKitScreen" component={CreativeKitScreen} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
    </Tab.Navigator>
  </NavigationContainer>
  */
    
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleText}>Snapchat Application</Text>
      <ScrollView ref={(scrollView) => {this.scrollView=scrollView}} style={styles.scrollView} horizontal={true} decelerationRate={0} snapToInterval={width-50} snapToAlignment={"center"} contentInset={{top: -50, left:30, bottom: -50, right: 30}}>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: exampleImageUri}}></Image>
          <TextInput style={styles.captionInput} placeholder='Add Caption Here' defaultValue={caption} onChangeText={newCaption => setCaption(newCaption)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck(exampleImageUri, exampleStickerUri);
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: exampleImageUri2}}></Image>
          <TextInput style={styles.captionInput} placeholder='Add Caption Here' defaultValue={caption1} onChangeText={newCaption => setCaption1(newCaption)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck(exampleImageUri2, exampleStickerUri2);
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: exampleImageUri}}></Image>
          <TextInput style={styles.captionInput} placeholder='Add Caption Here' defaultValue={caption2} onChangeText={newCaption => setCaption2(newCaption)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck(exampleImageUri, exampleStickerUri);
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: exampleImageUri}}></Image>
          <TextInput style={styles.captionInput} placeholder='Add Caption Here' defaultValue={caption3} onChangeText={newCaption => setCaption3(newCaption)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck(exampleImageUri, exampleStickerUri);
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: exampleImageUri}}></Image>
          <TextInput style={styles.captionInput} placeholder='Add Caption Here' defaultValue={caption4} onChangeText={newCaption => setCaption4(newCaption)}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck(exampleImageUri, exampleStickerUri);
          }}>
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
    paddingTop: StatusBar.currentHeight,
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
    marginTop: 20,
    flex: 5,
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  box: {
    marginTop: 60,
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
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  captionInput: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
});
