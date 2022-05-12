// // import React, { Component } from 'react';
// // import { View, Text,StyleSheet } from 'react-native';
// // import Video from 'react-native-video';
// // import MapView from 'react-native-maps';
// // import { Marker } from 'react-native-maps';

// // export default class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //     };
// //   }

// //   render() {
// //     return (
// //       <View>
// //        <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}   // Can be a URL or a local file.
// //        ref={(ref) => {
// //          this.player = ref
// //        }}                                      // Store reference
// //        onBuffer={this.onBuffer}                // Callback when remote video is buffering
// //        onError={this.videoError}               // Callback when video cannot be loaded
// //        style={styles.backgroundVideo} />
// //        <MapView
// //        style={{width:500,height:600}}
// //     initialRegion={{
// //       latitude: 37.78825,
// //       longitude: -122.4324,
// //       latitudeDelta: 0.0922,
// //       longitudeDelta: 0.0421,
// //     }}
// //   />
// //       </View>
// //     );
// //   }
// // }
// // var styles = StyleSheet.create({
// //   backgroundVideo: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     bottom: 0,
// //     right: 0,
// //     height:500,
// //     width:420
// //   },
// // });


// // import React, { Component } from 'react';  
// // import { StyleSheet, View,Text,Dimensions } from 'react-native';  
// // import MapView from 'react-native-maps';  
// // import { Marker,Polyline } from 'react-native-maps';  
// // import MapViewDirections from 'react-native-maps-directions';
// // const origin = {latitude: 26.898412317738316, longitude: 75.82959339022636};
// // const destination = {latitude:  26.8888941, longitude: 75.8417637};
// // const { width, height } = Dimensions.get('window');
// // const ASPECT_RATIO = width / height;
// // const LATITUDE = 37.771707;
// // const LONGITUDE = -122.4053769;
// // const LATITUDE_DELTA = 0.0922;
// // const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 
// // const GOOGLE_MAPS_APIKEY = 'AIzaSyBX7NRo0CItrO2PL0W30Wl0hQOU7zVKDo8';
// // export default class App extends Component {  
// //   constructor(props) {
// //     super(props);
 
// //     // AirBnB's Office, and Apple Park
// //     this.state = {
// //       coordinates: [
// //         {
// //           latitude: 37.3317876,
// //           longitude: -122.0054812,
// //         },
// //         {
// //           latitude: 37.771707,
// //           longitude: -122.4053769,
// //         },
// //       ],
// //     };
 
// //     this.mapView = null;
// //   }
 
// //   onMapPress = (e) => {
// //     this.setState({
// //       coordinates: [
// //         ...this.state.coordinates,
// //         e.nativeEvent.coordinate,
// //       ],
// //     });
// //   }
  
// //   render() {  
// //     return (  
// //       <View style={styles.MainContainer}>  
  
// //         {/* <MapView   
// //           style={styles.mapStyle}  
// //           showsUserLocation={false}  
// //           zoomEnabled={true}  
// //           zoomControlEnabled={true}  
// //           initialRegion={{  
// //             latitude: 26.8888941,   
// //             longitude: 75.8417637,  
// //             latitudeDelta: 0.0922,  
// //             longitudeDelta: 0.0421,  
// //           }}>  
  
// //           <Marker  draggable
// //             coordinate={{latitude: 26.898412317738316, longitude: 75.82959339022636}}  
// //             onDragEnd={(e) => console.log(e.nativeEvent.coordinate) }
// //             title={"DotSquare"}  
// //             description={"Java Training Institute"}  
// //           >
// //             </Marker>  
// //            <Marker  draggable
// //             coordinate={this.state.cordinate}  
// //             onDragEnd={(e) => console.log(e.nativeEvent.coordinate) }
// //             title={"DotSquare"}  
// //             description={"Java Training Institute"}  
// //           />  
// //           <MapViewDirections
// //     origin={origin}
// //     destination={destination}
// //     optimizeWaypoints={true}
// //     splitWaypoints={true}
// //     strokeWidth={3}
// //     strokeColor="skyblue"
// //     apikey={"AIzaSyBX7NRo0CItrO2PL0W30Wl0hQOU7zVKDo8"}
// //   />
// //         </MapView>   */}
// //         <MapView
// //         initialRegion={{
// //           latitude: LATITUDE,
// //           longitude: LONGITUDE,
// //           latitudeDelta: LATITUDE_DELTA,
// //           longitudeDelta: LONGITUDE_DELTA,
// //         }}
// //         zoomControlEnabled={true}
// //         style={StyleSheet.absoluteFill}
// //         ref={c => this.mapView = c}
// //         onPress={this.onMapPress}
// //       >
// //         {this.state.coordinates.map((coordinate, index) =>
// //           <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}
// //           image={{uri:'https://i.picsum.photos/id/8/200/200.jpg?hmac=7z37E8o2M_U09oSFIN5CdqKXlYXuLeWxTHJVlT9UUlY'}}
// //           >
// //           </MapView.Marker>
// //         )}
// //         {(this.state.coordinates.length >= 2) && (
// //           <MapViewDirections
// //           mode={'WALKING'}
// //             origin={this.state.coordinates[0]}
// //             waypoints={ (this.state.coordinates)}
// //             destination={this.state.coordinates[this.state.coordinates.length-1]}
// //             apikey={GOOGLE_MAPS_APIKEY}
// //             strokeWidth={3}
// //             strokeColor="hotpink"
// //             optimizeWaypoints={true}
// //             onStart={(params) => {
// //               console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
// //             }}
// //             onReady={result => {
// //               console.log(`Distance: ${result.distance} km`)
// //               console.log(`Duration: ${result.duration} min.`)
 
// //               this.mapView.fitToCoordinates(result.coordinates, {
// //                 edgePadding: {
// //                   right: (width / 20),
// //                   bottom: (height / 20),
// //                   left: (width / 20),
// //                   top: (height / 20),
// //                 }
// //               });
// //             }}
// //             onError={(errorMessage) => {
// //               // console.log('GOT AN ERROR');
// //             }}
// //           />
// //         )}
// //       </MapView>

        

          
// //       </View>  
// //     );  
// //   }  
// // }  
  
// // const styles = StyleSheet.create({  
// //   MainContainer: {  
// //     position: 'absolute',  
// //     top: 0,  
// //     left: 0,  
// //     right: 0,  
// //     bottom: 0,  
// //     alignItems: 'center',  
// //     justifyContent: 'flex-end',  
// //   },  
// //   mapStyle: {  
// //     position: 'absolute',  
// //     top: 0,  
// //     left: 0,  
// //     right: 0,  
// //     bottom: 0,  
// //   }, 
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   map: {
// //     ...StyleSheet.absoluteFillObject,
// //   },
// //   overlay: {
// //     position: 'absolute',
// //     bottom: 50,
// //     backgroundColor: 'rgba(255, 255, 255, 1)',
// //   }, 
// // });  



// // import React, { Component } from 'react';
// // import { View, Text, Animated,PanResponder } from 'react-native';

// // export default class App extends Component {
// //   textPosition={x:0,y:0}
// //   constructor(props) {
// //     super(props);
// //     this.position.addListener(latestPosition=>{
// //       this.textPosition=latestPosition
// //     })
// //     this.state = {
// //     };
// //   }
// //   position=new Animated.ValueXY();
// //   panresponder=PanResponder.create({

// //     onStartShouldSetPanResponder:()=>true,
// //     onPanResponderMove:(e,gesture)=>{
// //       console.log(gesture.moveX)
// //       const newPosition={x:gesture.dx,y:gesture.dy}
// //       this.position.setValue(newPosition)
// //     },
// //     onPanResponderGrant:()=>{
// //       this.position.setOffset({x:this.textPosition.x,y:this.textPosition.y})
// //       this.position.setValue({x:0,y:0})
// //     },
// //     onPanResponderEnd:()=>{
// //       this.position.flattenOffset()
// //     }
// //   })
// //   render() {
// //     return (
// //       <View>
// //         <Text> App </Text>
// //         <Animated.View style={[this.position.getLayout()]} {...this.panresponder.panHandlers}>
// //           <Text>Hello</Text>
// //         </Animated.View>
// //         <Animated.View style={[this.position.getLayout()]} {...this.panresponder.panHandlers}>
// //           <Text>guys</Text>
// //         </Animated.View>
// //       </View>
// //     );
// //   }
// // }

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Platform,
//   PermissionsAndroid
// } from "react-native";
// import MapView, {
//   Marker,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE
// } from "react-native-maps";
// import haversine from "haversine";
// navigator.geolocation = require('@react-native-community/geolocation');

// // const LATITUDE = 29.95539;
// // const LONGITUDE = 78.07513;
// const LATITUDE_DELTA = 0.009;
// const LONGITUDE_DELTA = 0.009;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;

// class AnimatedMarkers extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       routeCoordinates: [],
//       distanceTravelled: 0,
//       prevLatLng: {},
//       coordinate: new AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: 0,
//         longitudeDelta: 0
//       })
//     };
//   }

//   componentDidMount() {
//     const { coordinate } = this.state;

//     this.watchID = navigator.geolocation.watchPosition(
//       position => {
//         const { routeCoordinates, distanceTravelled } = this.state;
//         const { latitude, longitude } = position.coords;

//         const newCoordinate = {
//           latitude,
//           longitude
//         };

//         if (Platform.OS === "android") {
//           if (this.marker) {
//             this.marker.animateMarkerToCoordinate(
//               newCoordinate,
//               500
//             );
//           }
//         } else {
//           coordinate.timing(newCoordinate).start();
//         }

//         this.setState({
//           latitude,
//           longitude,
//           routeCoordinates: routeCoordinates.concat([newCoordinate]),
//           distanceTravelled:
//             distanceTravelled + this.calcDistance(newCoordinate),
//           prevLatLng: newCoordinate
//         });
//       },
//       error => console.log(error),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//         distanceFilter: 10
//       }
//     );
//   }

//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   getMapRegion = () => ({
//     latitude: this.state.latitude,
//     longitude: this.state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA
//   });

//   calcDistance = newLatLng => {
//     const { prevLatLng } = this.state;
//     return haversine(prevLatLng, newLatLng) || 0;
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           showUserLocation
//           followUserLocation
//           loadingEnabled
//           region={this.getMapRegion()}
//         >
//           <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             coordinate={this.state.coordinate}
//           />
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.bubble, styles.button]}>
//             <Text style={styles.bottomBarContent}>
//               {parseFloat(this.state.distanceTravelled).toFixed(2)} km
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{alignSelf:'flex-start',marginLeft:this.state.position,width:"50%",backgroundColor:'green'}} onLayout={event=>{
//           const layout=event.nativeEvent.layout;
//           this.setState({position:layout.width})
//         }}>
//           <Text>fdlfjl</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20
//   },
//   latlng: {
//     width: 200,
//     alignItems: "stretch"
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginHorizontal: 10
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginVertical: 20,
//     backgroundColor: "transparent"
//   }
// });

// export default AnimatedMarkers;


import React, { Component } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

class App extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      {console.log(this.pan.x._value)}
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value
      });
    },
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ]),
    onPanResponderRelease: () => {
      {console.log(this.pan.flattenOffset())}

      this.pan.flattenOffset();
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
          }}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default App;