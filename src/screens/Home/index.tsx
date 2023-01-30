import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Switch } from "react-native";
import { Header } from "../../components/Header";
import { Notificacoes } from "../../components/Notificacoes";
import { styles } from "./styles";



type Notification = Array<{
  name: string,
  intervalo: number
}>

export function Home() {

  const [notificacoes, setNotificacoes] = useState<Notification>([])

  const [name, setName] = useState('')
  const [intervalo, setIntervalo] = useState<number | string>("");

  const [isEnabled, setIsEnabled] = useState(false)

  function handlePaticipantAdd(name: string, intervalo: number) {
    if (!name) {
      Alert.alert("Lembrete", "Informe o nome do participante")
      return
    }

    if (!intervalo) {
      Alert.alert("Intervalo", "Informe o nome do participante")
      return
    }

    if (notificacoes.some(e => e.name === name)) {
      Alert.alert("Notificação", "Este notificação já existe")
      return
    }

    setNotificacoes(state => [...state, { name, intervalo }])

    setName("")
    setIntervalo("")

  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover", `Tem certeza que deseja remover a notificação ${name}?`, [
      {
        text: 'Sim',
        // onPress: () => setParticipantes(participantes.filter((participante) => participante !== name))
        onPress: () => setNotificacoes(notificacoes.filter((noticicacao) => noticicacao.name !== name))

      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }

  const manipularSwitch = () => {

    setIsEnabled(state => !state)

  }
  useEffect(() => {
    console.log(notificacoes)
  }, [notificacoes])

  return (
    <View
      style={styles.container}
    >
      <Header />
      <View style={styles.form}>
        <Text style={styles.label}>Informe a notificação que deseja receber</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Beber água"
          placeholderTextColor="#6b6b6b"
          value={name}
          onChangeText={setName}

        />
        <Text style={styles.label}>Informe o intevalo da notificação.</Text>
        <TextInput
          style={styles.input}
          placeholder="Em Minutos, Ex.: 60 = 1hs"
          placeholderTextColor="#6b6b6b"

          keyboardType="numeric"

          value={intervalo === 0 ? '' : intervalo}
          onChangeText={setIntervalo}

        />
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
          <Text style={styles.label}>Recorrente?</Text>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Text style={styles.label}>Não</Text>
            <Switch trackColor={{ false: "#95a5a6", true: "#2c3e50" }}
              thumbColor={!isEnabled ? "#7f8c8d" : "#f1c40f"}
              value={isEnabled}
              onValueChange={manipularSwitch}
            />
            <Text style={styles.label}>Sim</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaticipantAdd(name, intervalo)}
        >
          <Text style={styles.buttonText}>
            Adicionar Notificação
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={notificacoes}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <Notificacoes key={item.name} data={item} onRemove={() => handleParticipantRemove(item.name)} />

        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Voce não possui nenhuma notificação agendada!</Text>
        )}
      />
    </View>

  )
}

