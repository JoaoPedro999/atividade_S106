import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  inputname: {
    color: "black",
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
    width: 300,
    height: 50,
    backgroundColor: "lightgray",
    opacity: "80%",
  },
  button: {
    color: "white",
    backgroundColor: "black",
    fontSize: 20,
    width: 50,
    height: 25,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  senailogo: {
    width: 250,
    height: 50,
    bottom: 400,
  },
  Circulo: {
    width: 300,
    height: 300,
    borderRadius: 145,
    borderWidth: 10,
    borderColor: 'chartreuse',
  },

  descricao: {
    fontSize: 23,
    fontStyle: 'italic',
    borderBottomWidth: 2,
    borderColor: 'black',

  }

});

export default styles;