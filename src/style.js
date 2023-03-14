import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3'
    },

    gradientBackground:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '32%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    box:{
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        width: '85%',
        height: 400
    },

    input:{
        borderRadius: 5,
        width: '80%',
        marginLeft: 4,
        padding: 15,
        borderWidth: 1
    },

    viewIcons:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 35
    },

    button:{
        padding: 20,
        marginTop: 40,
        alignItems: 'center',
        borderRadius: 15,
    },

    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },

    image:{
        width: 150,
        height: 150
    }
})

export default style;