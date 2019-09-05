import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'


export default StyleSheet.create({

    mainContainer: {
        flex: 1,
    },
    homePageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.brandColor,
        textAlign: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    buttonType1: {
        backgroundColor: Colors.brandColor,
        marginBottom: 30,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10, 
        marginTop: 10
    },
    textButtonType1: {
        color: "white",
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
       
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 40,
        marginVertical: 40,

    },
    formContainer: {
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,0.5)",
    },
    textInput: {
        borderWidth: 0.5,
        borderColor: 'grey',
        width: 200,
        backgroundColor: 'white',
        marginTop: 0,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    },
    labelInput: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10
    },
    buttonType2: {
        backgroundColor: 'white',
        marginBottom: 20,
        borderBottomEndRadius: 5,
        borderTopStartRadius: 5,
    },
    textButtonType2: {
        color: Colors.brandColor,
        fontSize: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    containerProductsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    containerEachProduct: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'stretch',
        flexWrap: 'wrap',

    },
    containerProductPicture: {
        flex: 1,
        justifyContent: 'center'

    },
    imageProductList: {
        width: 180,
        height: 150,
        alignSelf: 'center',
    },
    containerProductText: {
        flex: 1,
        justifyContent: 'center',
    },
    titleProductList: {
        color: Colors.brandColor,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    productSpecification: {
        color: Colors.brandColor,
        marginRight: 20,
        marginLeft: 20,
        marginTop:10,
        borderColor : Colors.brandColor,
        borderBottomWidth:2,
    },

    containerPicturesProduct:{
        flex: 1,
        justifyContent: 'center',
        flexDirection:'row',
    },

    pictureActive:{
        flex: 8,
        alignItems :'center',
        borderColor : 'grey',
        borderWidth : 0.5,
        justifyContent: 'center',
    },
    pictureList:{
        flex: 2,
        justifyContent : 'space-around',
        alignItems :'center',
        borderColor : 'grey',
        borderWidth : 0.5
    },

    containerFormShipping : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    },


    mainContainerBlue : {
        backgroundColor: Colors.brandColor,
         margin: 20, 
         flex: 1
    }


}
)