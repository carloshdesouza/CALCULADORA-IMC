import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
     flex: 1,
     marginTop: 15,
     paddingTop: 60,
     borderRadius:50,
     alignItems:"center",
     width: "100%",     
    },
    information: {
        fontSize:18,
        color:"#aa0dff",
        fontWeight: "bold",
    },
    numberImc: {
     fontSize: 48,
     color: "#aa0dff",
     fontWeight: "bold",
    },
    boxSharebutton:{
        width:"100%",
        alignItems:"center",
        marginBottom:0,
        paddingTop:0,
    },
    shared:{
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,
    },
    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal:30,
    }
});

export default styles