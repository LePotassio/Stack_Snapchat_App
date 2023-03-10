import { CreativeKit } from '@snapchat/snap-kit-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Dimensions, Button, TouchableOpacity, Alert } from 'react-native';

/*
Eric Furukawa
3/7/2023


Scrolling card effect:
https://snack.expo.dev/H1CnjIeDb?platform=ios
https://stackoverflow.com/questions/43212931/react-native-horizontal-scroll-view-pagination-preview-next-page-card
*/

const { width } = Dimensions.get('window');

export default function App() {
  const sharePicture = (url) => {
    CreativeKit.sharePhoto({
      content: {
        uri: 'https://picsum.photos/200',
      },
     caption: "caption string",
    })/*
    .catch((error) => {
      Alert.alert(error);
    })*/;
  };

  const doAlert = (alert) => {
    Alert.alert(alert);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleText}>Snapchat Application</Text>
      <ScrollView ref={(scrollView) => {this.scrollView=scrollView}} style={styles.scrollView} horizontal={true} decelerationRate={0} snapToInterval={width-50} snapToAlignment={"center"} contentInset={{top: -50, left:30, bottom: -50, right: 30}}>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
          <TouchableOpacity style={styles.button} onPress={() => { sharePicture(); }}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={require('./assets/Photos/Soup.jpg')}></Image>
        </View>
        <View style={styles.box}>
          <Image style={styles.images} source={{uri: 'https://picsum.photos/200'}}></Image>
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
    paddingTop: StatusBar.curretnHeight,
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
    height: 600,
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
