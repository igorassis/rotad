import React, { useState, useEffect } from 'react';
import { View, TextInput, Button} from 'react-native';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('FUNCIONOU');
  }, [])

  const signIn = () => {
    return;
  }

  return (
    <View>
        
        <TextInput onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
        <TextInput onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
       
        {/* {err.length ? <Error text={err} /> : null} */}

        <Button onPress={signIn} 
            text="Login" 
            title="Login"
            color="#841584"/>


      {/* <TextInput></TextInput>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
    
    /> */}
      
    </View>
  );
}