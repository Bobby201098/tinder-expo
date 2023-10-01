import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, TouchableOpacity, } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
       
      <View style={styles.containerHome}>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop:5 }}>
          <Text style={{ fontSize: 24, color: "#D3D3D3" }}>
            00:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handleStart}>
              <Text>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStop}>
              <Text>Stop</Text>
            </TouchableOpacity>
          </View>
        </View>
      
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
       
      </View>
    </ImageBackground>
  );
};

export default Home;
