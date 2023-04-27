import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from "@react-navigation/native";


const QR_codeScreen = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if(data=="go to question screen"){
      navigation.navigate("Quest");
    }

    if(data){
      //use navigation in order to navigate to the event details page
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.screen}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'დააჭირეთ ახლიდან დასასკანირებლად'} onPress={() => setScanned(false)} />}
      <View style={styles.scan}><Text style={styles.scanText}>დაასკარენეთ QR კოდი</Text></View>
      <View style={styles.square}></View>
    </View>
  );
}

export default QR_codeScreen

const styles = StyleSheet.create({
  screen:{
    marginTop:50,
    flex:1,
    
  },
  square:{
    width:300,
    height:300,
    borderWidth:8,
    borderRadius:20,
    marginTop:50,
    justifyContent:'center',
    alignSelf:'center',
    borderColor:'#3498db',
    
  },
  scan:{
    alignSelf:'center',
    marginTop:50,
    backgroundColor:'#3498db',
    alignItems:'center',
    justifyContent:'center',
    opacity: .7,
    height:50,
    width:200,
    borderRadius:10,
    
  },
  scanText:{
    color:'white',
    fontSize:15,
  }
})