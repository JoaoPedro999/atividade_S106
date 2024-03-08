import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

      container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        },

        input: {
          borderWidth: 1,
          padding: 2,
          fontSize: 10,
          width: 200,
        },

        submenu: {
          height: 245,
          padding: 30,
          backgroundColor: 'white',
          borderRadius: 40,
          alignItems: 'center',
          gap: 25,
          opacity: 0.7,
        },

        submenucontact: {
          height: 365,
          padding: 40,
          backgroundColor: 'white',
          borderRadius: 40,
          alignItems: 'center',
          gap: 25,
          opacity: 0.7,
        },

        body: {
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
        },

        containercorpo: {
          flex: 1,
          justifyContent: 'center',
        },
  });

  export default styles;