import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView style = {{backgroundColor: 'black'}}>
      <View style={styles.titulo}>
        <Text style={styles.text}>HELLO KITTY</Text>
      </View>
      <ScrollView style ={styles.cont_texto}>
        <Text>
A Hello Kitty é uma personagem criada em 1974 pela sanrio.com⁠�, uma empresa japonesa. 
Com seu famoso laço vermelho e aparência delicada, ela se tornou uma das personagens 
mais conhecidas do mundo. Seu nome verdadeiro é Kitty White, e sua história oficial 
diz que ela mora na Inglaterra com sua família.
Ao longo dos anos, Hello Kitty apareceu em diversos produtos, como roupas, mochilas,
 brinquedos, materiais escolares e acessórios. Seu sucesso ultrapassou o público infantil, 
 conquistando também adolescentes e adultos. Isso aconteceu porque a personagem transmite 
 valores como amizade, gentileza e alegria.
Além de ser um ícone da cultura pop japonesa, Hello Kitty ajudou a popularizar o estilo
 "kawaii", que valoriza tudo o que é fofo e encantador. Mesmo após mais de 50 anos de sua 
 criação, ela continua fazendo sucesso em vários países, mostrando que personagens simples podem marcar gerações inteiras.


        </Text>
      </ScrollView>
        <View>
          <TextInput style={styles.input}>

            </TextInput>
        </View>
        <View style ={styles.caixa1}>
          <Text>
            Caixa
          </Text>
        </View>
    </ScrollView> 
   
  );
}

const styles = StyleSheet.create({
  titulo: {
    width: 200,
    marginTop: 40,
    height: 70,
    borderRadius: 300,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cont_texto: {
    marginTop: 20,
    height: '90%',
    width: 800,
    backgroundColor: "pink",
    alignSelf: 'center',
  },
  text: {
    height: 50,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Sans-Serif',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height:40, 
    borderColor: "blue", 
    borderWidth: 20, 
    width: 500, 
    alignSelf: 'center',
   
  },
  caixa1: {
    backgroundColor: "pink",
    height: 200,
    width: 200,
    alignSelf: 'center',
  }
});
