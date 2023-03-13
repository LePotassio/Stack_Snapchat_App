import { CreativeKit, LoginKit } from '@snapchat/snap-kit-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';

import exampleImage from './assets/Photos/Soup.jpg'
const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

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

  return url.startsWith('https:') || url.startsWith('http:');
};

export default function App() {
  const sharePicture = (url) => {
    //LoginKit.login();
    CreativeKit.sharePhoto({
      content: {
        uri: url,
      },
      sticker: {
        uri: url,
        width: 300,
        height: 300,
        posX: 0.5,
        posY: 0.6,
        rotationDegreesInClockwise: 0,
        isAnimated: false,
     },
      caption: "This is an example caption",
    })
    /*.catch((error) => {
      Alert.alert(error);
    })*/;
  };

  const sharePictureCheck = (url) => {
    if (isValidHttpUrl(url)) {
      RNFetchBlob.config({
        fileCache: true,
      })
      .fetch('GET', url)
      .then((res) => {
        //doAlert(res.data);
        sharePicture(`file://${res.data}`);
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
          <Image style={styles.images} source={{uri: 'https://drive.google.com/uc?export=view&id=1E6Un4ZLSfvUedhPGR0h_EzGzLmL-RnlW'}}></Image>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck('https://drive.google.com/uc?export=view&id=1E6Un4ZLSfvUedhPGR0h_EzGzLmL-RnlW');
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck('https://i.imgur.com/tkDnkwb.jpg');
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck('https://i.imgur.com/tkDnkwb.jpg');
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck('https://i.imgur.com/tkDnkwb.jpg');
          }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() =>
          { 
            sharePictureCheck('https://i.imgur.com/tkDnkwb.jpg');
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
    flex: 5,
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  box: {
    marginTop: 140,
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
  }
});
