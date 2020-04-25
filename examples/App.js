/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {HorizontalList} from 'react-native-horizontal-list';

const data = [{
        id: 1,
        category: "advertisement",
        title: "Please subscribe to view more exclusive contents.", 
        image: { uri: "https://i.imgur.com/L68FtMA.jpg" },
    }, {
        id: 2,
        category: "ROMANCE",
        title: "Beauty and the Beast.",
        image: { uri: "https://i.imgur.com/J5pgFyr.jpg" }, 
        rating: 2.5,
    },  {
        id:  3,
        category: "SCIENCE FICTION", 
        title: "Blade Runner Future 2049.",
        image: { uri: "https://i.imgur.com/L68FtMA.jpg" }, 
        rating: 4.0,
    }, {
        id: 4,
        category: "SUPERHERO ACTION",
        title: "Captain America Civil War.",
        image: { uri: "https://i.imgur.com/tAui2H7.jpg" }, 
        rating: 3.5,
    }, {
        id: 5,
        category: "advertisement",
        title: "2 months for only Rm15.90 for offline movies.", 
        image: { uri: "https://i.imgur.com/L68FtMA.jpg" },
    }, {
        id: 6,
        category: "DRAMA",
        title: "Shawshank Redemption.",
        image: { uri: "https://i.imgur.com/7YGXDbM.jpg" }, rating: 3.0,
    }
];

class App extends React.Component{
    render(){
        return (
            <SafeAreaView>
                <HorizontalList 
                    data={data}
                    titleOfList='New Release' 
                    viewProps={{marginTop:50 }}
                    ratingColor='#f1c40f'
                    ratingBackgroundColor='#fff'
                />
            </SafeAreaView>
        );
    }
};

export default App;
