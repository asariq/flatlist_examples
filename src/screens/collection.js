import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    Image,
    FlatList,
    ImageBackground
} from 'react-native';

const ListItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image
                source={

                    item.uri == "" ? item.src : { uri: item.uri }
                }
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    );
};

const Collection = () => {
    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.imgBack}
                source={(require('../image/bg.jpg'))}
            >
                <Text style={styles.titelText}>COLLECTION</Text>
                <SectionList
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    stickySectionHeadersEnabled={false}
                    sections={SECTIONS}
                    renderSectionHeader={({ section }) => (
                        <>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                            <FlatList
                                horizontal
                                data={section.data}
                                renderItem={({ item }) => <ListItem item={item} />}
                                showsHorizontalScrollIndicator={true}
                            />
                        </>
                    )}
                    renderItem={({ item, section }) => {
                        return null;
                       
                    }}
                />
            </ImageBackground>
        </View>
    );
};

const SECTIONS = [
    {
        title: 'work',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/10/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1002/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1006/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1008/200',
            },
        ],
    },
    {
        title: 'Tour',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                src: (require('../image/l1.png')),
                uri: '',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1012/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1013/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1015/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1016/200',
            },
        ],
    },
    {
        title: 'Nature',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1020/200',
            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1024/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1027/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1035/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1038/200',
            },
        ],
    },
    {
        title: 'Best of All',
        data: [
            {
                key: '1',
                text: 'Item text 1',
                src: (require('../image/ic.jpg')),
                uri: ""

            },
            {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/1024/200',
            },

            {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1027/200',
            },
            {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1035/200',
            },
            {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1038/200',
            },
        ],
    },
];
export default Collection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
    },
    imgBack: {
        widht: "100%",
        height: "100%",
    },
    titelText: {
        color: "white",
        fontSize: 30,
        marginLeft: 15,
        marginTop: 30
    },
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 200,
        height: 200,
    },
    itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
    },
});