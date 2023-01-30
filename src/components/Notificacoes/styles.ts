import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({

  container:{
    flex: 1,
    width: '100%',
    
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  conteudo:{
    flex:1,
    paddingVertical: 8,
  },
  name:{
    flex: 1,
    color:"#fff",
    fontSize: 16,
    marginLeft: 16,
    lineHeight:30
  },
  buttonText:{
    color: '#fff',
    fontSize: 24
  },
  button:{
    width: 70,
    height: '100%',
    borderRadius: 5,
  backgroundColor: '#881337',

  alignItems: 'center',
  justifyContent: 'center'

  }

})
