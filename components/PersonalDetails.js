import { View,Text, StyleSheet } from "react-native";


export default function PersonalDetails () {
    const AGE = new Date().getFullYear() - new Date('1998-01-21').getFullYear();
    
    return (
            <View>
                <View style={[{flexDirection : 'row', marginTop : 8}, styles.view]}>
                    <Text style={{fontSize : 18, fontWeight : 500}}>Name : </Text>
                    <Text style={{fontSize : 18, fontWeight : 700}}>{`Nilotpal Mandal`}</Text>
                </View>
                <View style={[{flexDirection : 'row'}, styles.view]}>
                    <Text style={{fontSize : 18, fontWeight : 500}}>Age : </Text>
                    <Text style={{fontSize : 18, fontWeight : 700}}>{AGE}</Text>
                </View>
                <View style={[{flexDirection : 'row'}, styles.view]}>
                    <Text style={{fontSize : 18, fontWeight : 500}}>DOB : </Text>
                    <Text style={{fontSize : 18, fontWeight : 700}}>{new Date('1998-02-21').toDateString()}</Text>
                </View>
            </View>
    ) ;
}

const styles = StyleSheet.create({
    view : {
        marginHorizontal : 10,
        paddingVertical : 15,
        alignItems : 'center',
        backgroundColor : 'red',
        borderRadius : 8,
        //justifyContent : 'center'
        paddingLeft : 15,
    }
})