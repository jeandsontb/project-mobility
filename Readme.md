<h1 align="center">
    APLICATIVO PARA GERENCIAMENTO DE COORDENADAS
</h1>

<h4 align="center"> 
	Projeto para coletar informações de localização do aparelho off-line e sincronizar as informações quando estiver online. 
</h4>

<p align="center">

  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=September&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

Mobility - É um aplicativo para monitoramento de localização do usuário a partir do seu celular, o usuário pode escolher os intervalos de tempo entre 1 à 10 segundos para realizar o monitoramento e todo o pacote de informação será sincronizado com o servidor imediatamente ou quando o usuário estiver com acesso á internet.

## 🎨 Layout

O layout foi eleborado pela empresa Contele.


### Mobile

<p align="center">
  <img alt="Mobility" title="#Mobility" src="https://raw.githubusercontent.com/jeandsontb/project-mobility/main/assets/Screenshot_20210921-011312_Mobility.jpg" width="200px">

  <img alt="Mobility" title="#Mobility" src="https://raw.githubusercontent.com/jeandsontb/project-mobility/main/assets/Screenshot_20210921-011408_Mobility.jpg" width="200px">

  <img alt="Mobility" title="#Mobility" src="https://raw.githubusercontent.com/jeandsontb/project-mobility/main/assets/Screenshot_20210921-011353_Mobility.jpg" width="200px">

  <img alt="Mobility" title="#Mobility" src="https://raw.githubusercontent.com/jeandsontb/project-mobility/main/assets/Screenshot_20210921-011428_Mobility.jpg" width="200px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [ReactNavigation][reactnavigation]
- [Geolocation][geolocation]
- [NetInfo][netinfo]
- [StyledComponents][styledcomponents]
- [VectorIcons][vectoricon]
- [UUID][uuid]
- [Vscode][vscode]

## 💡 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]e o Pacote SDK nativo do android. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode].

A api para rodar esse aplicativo pode verificar no repositorio da [Contele][contele] 

### 🧭 Rodando a aplicação.

```bash
# Clone este repositório
$ git clone https://github.com/jeandsontb/project-mobility.git

# Vá para a pasta da aplicação 
$ cd project-mobility

# Instale as dependências
$ npm install

# Estarte a aplicação 
$ sudo npm start 
$ ou 
$ sudo npm start -- --port=8080

# Rode a aplicação
$ npx react-native run-android 
$ ou 
$ npx react-native run-android --port=8080


# A aplicação será carregada na porta:8080

```

## Autor do projeto

Feito por Jeandson Tenorio 👋🏽 [contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[reactjs]: https://reactjs.org
[reactnavigation]: https://reactnavigation.org/
[geolocation]: https://github.com/react-native-geolocation/react-native-geolocation
[netinfo]: https://github.com/react-native-netinfo/react-native-netinfo
[styledcomponents]: https://styled-components.com
[vectoricon]: https://github.com/oblador/react-native-vector-icons
[uuid]: https://www.npmjs.com/package/react-native-uuid
[vscode]: https://code.visualstudio.com/
[contele]: https://github.com/contele/cntl-test/tree/master/react-native