import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";


type Data = {
  name: string,
  intervalo?: number | string
} 

type Props ={
  data: Data,
  onRemove: () => void
}


export function Notificacoes({data, onRemove}: Props){


  return(
    <View style={styles.container}>
      <View style={styles.conteudo}>
      <Text style={styles.name}>Lembrete: {data.name}</Text>
      <Text style={styles.name}>Ingervalo: De {data.intervalo} minutos.</Text>
      </View>
     
    
      <TouchableOpacity
      onPress={onRemove}
     style={styles.button}>
      <Text style={styles.buttonText}>
      <AntDesign name="delete" size={24} color="white" />
      </Text>
     </TouchableOpacity>
    </View>
  )
}
