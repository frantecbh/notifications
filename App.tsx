import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";



export default function App(){

  return(
    <>
     <Home />
   <StatusBar
   barStyle="light-content"
   backgroundColor="transparent"
   translucent
   />
    </>


  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
