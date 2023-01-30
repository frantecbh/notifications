import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#18181b',
    padding: 24,

  },
  eventName:{
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate:{
    color: '#fff',
    fontSize: 16,
  },

  form:{
    
   
    marginTop: 36,
    marginBottom:15,

  },

  input:{

    width: '100%',
    marginRight: 12,
    height:56,
    backgroundColor: '#1f1e25',
    borderRadius: 2,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginBottom: 8
  },
  textIput:{
    color: '#fff',
   marginBottom:5,
    fontSize: 14
  },
  buttonText:{
    color: '#fff',
    fontSize: 24,
    fontWeight: "bold"
  },
  button:{
    width: '100%',
    
    height: 56,
    borderRadius: 5,
  backgroundColor: '#4c1d95',

  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: 6,

  },
  listEmptyText:{
    color: '#fff',
    textAlign: "center",
    fontSize: 14
  },
  label:{
    color: '#fff',    
    fontSize: 18,
    marginBottom: 5
  },



})
