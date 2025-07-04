import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <Image source={require('@/assets/images/zucc.jpg')}style={styles.image1}/>
      <Text style={styles.text1}>Mark Zuckerberg</Text>
      <Text>CEO Meta</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontWeight: 'bold' ,
    fontSize: 20
  },
  image1: {
    width: 180,
    height: 250,
    borderRadius: 20,
    margin: 20
  }
  


});
