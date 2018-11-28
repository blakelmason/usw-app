import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

style = {
  display: 'flex',
  flex: 1,
  alignItems: 'center'
}

export default class App extends React.Component {
  render() {
    return (
      <View style={style}>
        <StatusBar hidden />
        <Image
          style={{ height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute' }}
          source={{ uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/17553786_1281736581934042_437350246262767860_n.jpg?_nc_cat=104&_nc_ht=scontent-lax3-1.xx&oh=72efbdbb2b64e773f88bc6d3e2d11e7b&oe=5C64C6F4' }}
        />
        <Image
          style={{ height: 90, width: '100%', resizeMode: 'contain', marginTop: 17 }}
          source={{ uri: 'http://images.iconfigurators.com/images/websites/logos/USWheelLogo_5684.png' }}
        />
      </View>
    );
  }
}
