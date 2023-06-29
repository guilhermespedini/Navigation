import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Homepage</Text>
        <Button
          title="Sobre (Quem somos)"
          onPress={() => navigation.navigate('Sobre')}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Desenvolvimento de Sistemas"
          onPress={() => navigation.navigate('Desenvolvimento')}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Administração"
          onPress={() => navigation.navigate('Administração')}
        />
      </View>
    );
  }
}

class SobreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC "Adolpho Berezin" de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.
        </Text>
      </View>
    );
  }
}

class DesenvolvimentoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.
        </Text>
      </View>
    );
  }
}

class AdministracaoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonSpacing: {
    marginBottom: 10,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sobre: {
      screen: SobreScreen,
      navigationOptions: {
        title: 'Sobre (Quem somos)',
      },
    },
    Desenvolvimento: {
      screen: DesenvolvimentoScreen,
      navigationOptions: {
        title: 'Desenvolvimento de Sistemas',
      },
    },
    Administração: {
      screen: AdministracaoScreen,
      navigationOptions: {
        title: 'Administração',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);