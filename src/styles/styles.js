import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  
  },

  body: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 75,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
    width: 150,
  },
  imagelogo: {
    width: 125,
    height: 32,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    gap: 10,
  },
  secondaryContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  thirdContainer: {
    flex: 1,
    width: "100%",
    marginTop: 40,
    textAlign: "center",
    alignItems: "center",
  },

  containerRodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 75,
  },

  containercorpo: {
    flex: 1,
    justifyContent: 'center',
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

  boxcentral: {
    width: 300,
    height: 175,
    opacity: "80%",
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
  },
  imagecirculo: {
    width: 300,
    height: 300,
    borderRadius: 145,
    borderWidth: 10,
    borderColor: 'chartreuse',
    marginBottom: '10%'
  },

  descricao: {
    fontSize: 23,
    fontStyle: 'italic',
    borderBottomWidth: 2,
    borderColor: 'black',

  },
});


export default styles;
