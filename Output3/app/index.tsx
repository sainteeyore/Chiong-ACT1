import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={styles.text1}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
      <Image source={require('@/assets/images/ccis.png')} style={styles.image1} />
      <Text style={styles.footerTxt1}>Developed by</Text>
      <Text style={styles.footerTxt2}>Larianmar Pancho</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 26,
    justifyContent: 'center' ,
    textAlign: 'center',

  },
  image1: {
    width: 250,
    height: 250,
  },
  footerTxt1: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    
  },
  footerTxt2: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
});
