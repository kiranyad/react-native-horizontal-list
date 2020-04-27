import React from 'react';
import { 
    StyleSheet, 
    Text, 
    FlatList,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

const imageWidth = 120;
class HorizontalList extends React.Component {
    constructor() {
        super();
        this.state = {
            Default_Rating: 2,    //To set the default Star Selected
            Max_Rating: 5,    //To set the max number of Stars
        };
        
        // this.Half_Star = '../assets/image/star-half-full.png';
    }

    //convert the first letter to capital case
    firstLetterUpper(theString) {
        var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,
            function(c){
                return c.toUpperCase()
            }
        );

        return newString;
    }

    /**
     * make and show the list items
     */
    showItems = ( item ) => {
        let React_Native_Rating_Bar = [];
        //Filled Star. You can also give the path from local
        let Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    
        //Empty Star. You can also give the path from local
        let Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
        
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <Image
                    style={styles.StarImage}
                    source={
                    i <= item.rating
                        ? { uri: Star }
                        : { uri: Star_With_Border }
                    }
                />
            );
        }
        
        return(
            <View key={item.id} style={{marginLeft: 15, width: imageWidth}}>
                <TouchableOpacity onPress={() => {
                    Alert.alert('', item.image.uri);
                }}>
                    <Image style={styles.imgProp} source={{uri: item.image.uri}} />
                </TouchableOpacity>
                
                <Text style={[{fontSize: 10, marginVertical : 5, color:'#82868a'}]}>
                    {this.firstLetterUpper(item.category)}
                </Text>

                {/*View to hold our Stars*/}
                <View style={styles.childView}>{React_Native_Rating_Bar}</View>

                <TouchableOpacity onPress={() => {
                    Alert.alert('', item.image.uri);
                }}>
                    <Text style={{fontWeight:"bold", fontSize:12, marginVertical: 7}} numberOfLines={2}>
                        {this.firstLetterUpper(item.title)}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        const viewProps = this.props.viewProps || {};
        return (
            <View {...viewProps}>
                <Text numberOfLines={2} style={{fontWeight:"bold", marginVertical:10, marginLeft: 15}}>
                    {this.props.titleOfList}
                </Text>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => (
                        this.showItems(item)
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    ListFooterComponent={()=> (<View style={{marginRight:15}}/>)}
                />
            </View>
        ); 
    }
}


const styles = StyleSheet.create({
    imgProp: {
        width: imageWidth,
        height: imageWidth,
        borderRadius: 15
    },
    StarImage: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    },
    childView: {
        flexDirection: 'row',
        marginTop: 7,
    },

});

export default HorizontalList;