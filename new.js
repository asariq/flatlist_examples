

// import React, { useEffect, useState } from 'react';
// import {
//   Alert,
//   View,
//   Text,
//   TextInput,
//   Button,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ImageBackground
// } from 'react-native';
// import Checkbox from 'react-native-checkbox'





// const CheckList = props => {


//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(props.data);
//   }, []);

//   const OnCheckChange = id => {
//     const arr = [...data];
//     const item = arr.find(item => item.id === id);
//     item.isChecked = !item.isChecked;
//     setData(arr);

//   };

//   return (
//     <FlatList
//       data={items}
//       renderItem={({ item }) => {
//         return (
//           <TouchableOpacity style={{ flexDirection: "row" }}>

//             <Image style={{ height: 70, width: 90, margin: 80 }} source={item.code} />
//             <Text></Text>
//           </TouchableOpacity>
//         );
//       }}
//     />
//   );
// };

// const items = [
//   { id: 1, name: "sariq", code: require('./image/ic.jpg') },
//   { id: 2, name: "anwar", code: require('./image/l1.png') },
//   { id: 3, name: "sariq", code: require('./image/ic.jpg') },
//   { id: 4, name: "anwar", code: require('./image/l1.png') },
//   { id: 5, name: "sariq", code: require('./image/ic.jpg') },
//   { id: 6, name: "anwar", code: require('./image/l1.png') },
//   { id: 7, name: "sariq", code: require('./image/ic.jpg') },
//   { id: 8, name: "anwar", code: require('./image/l1.png') },
  
// ];

// const App = () => {

//   return (
//     <View style={{ flex: 1, backgroundColor:"gray" }}>
//       <FlatList
//         data={items}
//         horizontal={true}
//         showsVerticalScrollIndicator={true}
//         renderItem={({ item }) => {
//           return (
//             <View style={{ flex:1,flexDirection: "column" }}>

//               <ImageBackground style={{ height: 113, width: 113, margin: 10 }} source={item.code} >
//                 <Checkbox style={{ top: -89 }} />
//               </ImageBackground>
//             </View>
//           );
//         }}
//       />
//       <FlatList
//         data={items}
//         horizontal={true}
//         showsVerticalScrollIndicator={true}
//         renderItem={({ item }) => {
//           return (
//             <View style={{ flex:1,flexDirection: "column" }}>

//               <ImageBackground style={{ height: 113, width: 113, margin: 10 }} source={item.code} >
//                 <Checkbox style={{ top: -89 }} />
//               </ImageBackground>
//             </View>
//           );
//         }}
//       />
      
//     </View >
//   );
// }


// export default App;