import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    paddingTop: 16,    
  },

  containerProfile:{
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent: 'space-between',

  },
  title: {
    color: '#fdfcfe',
    fontSize: 22,
    fontWeight: 'bold',
  },
  nameUser:{
    color: '#fdfcfe', fontSize: 18, 
  },
  image:{ 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    marginRight: 10 
  },
  button:{
    alignItems: "center",
    
  },
  textButton:{
    color: '#6b6b6b'
  },
  label: {
    color: '#6b6b6b',    
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'center',
    marginTop: 5
  }

})