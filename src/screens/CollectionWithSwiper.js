import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const colors = [
  { title: 'tomato', value: 123450 },
  { title: 'red', value: 345677 },
  { title: 'yellow', value: 346778 },
  { title: 'green', value: 1566777 },
  { title: 'blue', value: 345677 },
  { title: 'black', value: 346778 },
  { title: 'lll', value: 1566777 },
];


const SwiperFlat = () => {
  const [array, setArray] = useState([])
  useEffect(() => {
    var array1 = []
    var array2 = []
    var index = 0
    for (var i = 0; i < colors.length / 3; ++i) {
      array1.push(colors[index]);
      array1.push(colors[index + 1])
      array1.push(colors[index + 2])

      index = index + 3
      array2.push(array1)
      array1 = []
    }
    setArray(array2)

  }, [])

  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBack}
        source={(require('../image/bg.jpg'))}
      >
        <View style={styles.graybox}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.textheading}>List of colors</Text>

            <SwiperFlatList
              autoplay={false}
              index={1}
              showPagination
              paginationActiveColor={"red"}
              data={array}
              renderItem={({ item }) => {

                return (
                  <>
                    {item[0]?.title && <View style={styles.child}>
                      <Text style={styles.text}>{item[0]?.title}</Text>
                      <Text style={styles.text}>{item[0]?.value}</Text>
                    </View>}

                    {item[1]?.title ? <View style={styles.child}>
                      <Text style={styles.text}>{item[1]?.title}</Text>
                      <Text style={styles.text}>{item[1]?.value}</Text>
                    </View> : <View style={[styles.child, { backgroundColor: "#C5C6D0" }]}></View>
                    }

                    {item[2]?.title ? <View style={styles.child}>
                      <Text style={styles.text}>{item[2]?.title}</Text>
                      <Text style={styles.text}>{item[2]?.value}</Text>
                    </View> : <View style={[styles.child, { backgroundColor: "#C5C6D0" }]}></View>
                    }

                  </>
                )
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
export default SwiperFlat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  imgBack: {
    widht: "100%",
    height: "100%",
    justifyContent: "center"
  },
  graybox: {
    height: 170,
    width: 400,
    backgroundColor: "#C5C6D0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textheading: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    right: 130,
    marginTop: 5
  },
  child: {
    borderRadius: 10,
    width: 110,
    height: 95,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    backgroundColor: "gray"

  },
  text: {
    fontSize:
      20
  },
});




