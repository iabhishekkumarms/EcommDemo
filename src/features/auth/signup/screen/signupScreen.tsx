import {View, Text} from 'react-native';
import React from 'react';

const SignupScreen = () => {
  console.log('signup screen execture');

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text style={{color: 'blue', fontSize: 24}}>Signup Screen</Text>
    </View>
  );
};

export default SignupScreen;
