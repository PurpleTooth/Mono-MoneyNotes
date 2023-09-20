import {
  StyleSheet,
  View,
  Pressable,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";

import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Body, H2 } from "../../shared/ui/TextStyles/TextStyles";
import { ButtonActive } from "../../shared/ui/button/Buttons";
import slides from "../../entities/OnboardingItems";

import { storeObject } from "../../shared/functions/asyncstorage";

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Authentication: undefined;
};

type OnboardingSliderNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Authentication"
>;

export const OnboardingSlider: React.FC = () => {
  const navigation = useNavigation<OnboardingSliderNavigationProp>();
  const { width, height } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleNext = () => {
    if (activeSlideIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeSlideIndex + 1,
        animated: true,
      });
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };

  const handleFinish = () => {
    storeObject("onboarded", { onboarded: true });
    navigation.navigate("Authentication");
  };

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(_, index) => index.toString()}
      onMomentumScrollEnd={(event) => {
        const offset = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offset / width);
        setActiveSlideIndex(newIndex);
      }}
      renderItem={({ item, index }) => (
        <View style={[styles.main, { width: width, height: height }]}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <View>
                <Body style={{ color: "#404040" }}>{item.id}/3</Body>
              </View>
              <Pressable
                style={styles.skipButton}
                onPress={() => handleFinish()}
              >
                <Body style={{ color: "#404040" }}>Skip</Body>
              </Pressable>
            </View>
            <View style={styles.body}>
              <Image style={styles.image} source={item.image} />
              <H2 style={{ color: "#404040" }}>{item.title}</H2>
              <Body style={{ color: "#A6A6A6", textAlign: "center" }}>
                {item.subtitle}
              </Body>
            </View>
            <View style={styles.footer}>
              <ButtonActive
                text={index < slides.length - 1 ? "Next" : "Ready"}
                onPress={index < slides.length - 1 ? handleNext : handleFinish}
              />
            </View>
          </View>
        </View>
      )}
    />
  );
};
export default OnboardingSlider;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "white",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    width: 382,
    height: "100%",
    paddingTop: 12,
    paddingBottom: 24,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 382,
  },

  skipButton: {
    borderRadius: 99,
    borderWidth: 1,
    padding: 5,
    borderColor: "#D9D9D9",
    width: 81,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  image: {
    height: 382,
    resizeMode: "contain",
    marginTop: 48,
  },

  body: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
