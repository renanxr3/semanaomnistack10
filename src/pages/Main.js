import React, { useState, useEffect }  from 'react';
import { StyleSheet, Image,  View, Text } from 'react-native';
import MapView, { Marker, Callout } from "react-native-maps";
import { requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                })
            }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={{ flex: 1 }} >
            <Marker coordinate={{ latitude: -23.4943707, longitude: -46.8716987 }} >
                <Image style={styles.avatar} source={{ uri: "https://avatars0.githubusercontent.com/u/6154722?s=200&v=4" }} />

                <Callout onPress={() => {
                    navigation.navigate("Profile", { github_username: "renanxr3" });
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName} >Nome</Text>
                        <Text style={styles.devBio} >Descricao</Text>
                        <Text style={styles.devTechs} >Tecnologias</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54, 
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "#FFF",
    }, 

    callout: {
        width: 260,
    }, 

    devName: {
        fontWeight: "bold",
        fontSize: 16,
    },

    devBio: {
        color: "#666",
        marginTop: 5,
    }, 

    devTechs: {
        marginTop: 5,
    }, 


})

export default Main;