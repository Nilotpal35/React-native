import { StyleSheet, View } from "react-native";
import PersonalDetails from "./UI/PersonalDetails";


export default function Profile () {
    return (
        <>
        <View style={styles.borderBottom}>
            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <View style={styles.image} />
            </View>
        </View>
        <PersonalDetails/>
        </>
    );
}

const styles = StyleSheet.create({
    image :{
        borderWidth : 4,
        borderColor : 'purple',
        //padding  :15,
        borderRadius : 100,
        height :200,
        width : 200,
        marginVertical : 30,
       
    },
    borderBottom : {
        borderBottomColor : 'black',
        borderBottomWidth : 2,
        marginHorizontal : 10
    }
})