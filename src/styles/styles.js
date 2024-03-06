import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },

        body: {
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
        },

              containerHeader: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height:75,
              },
              logo: {
                flexDirection: 'row',
                justifyContent: 'center',
                width: 150,
              },
              imagelogo: {
                width: 65,
                height:55,
              },
              Buttons: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 10,
                gap: 10,
                
              },
                secondaryContainer: {
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                },

                thirdContainer: {
                  flex: 1,
                  width: '100%',
                  marginTop: 40,
                  textAlign: 'center',
                  alignItems: 'center',
                  },
                  
                boxcentral: {
                    width: 250,
                    height: 200,
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                },

                boxcentralBlog: {
                  width: '100%',
                    height: 100,
                    backgroundColor: 'black',
                    opacity: 0.5,
                    justifyContent: 'center'
                },

                containerRodape: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    height:75,
                  },
  });

  export default styles;