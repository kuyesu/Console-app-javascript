import React from "react";
import {
  Text,
  Link,
  HStack,
  Heading,
  VStack,
  Box,
  Stack,
  Center,
  Container,
  View,
  ScrollView,
} from "native-base";
// import NativeBaseIcon from "../NativeBaseIcon";
import VoiceSpeaking from "../components/common/Voice";
import Footer from "../components/common/Footer"
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import RenderHeader from "../components/common/renderHeader"

function Dashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{paddingTop: 20}}>
        <RenderHeader />
      </View>
      <View style={styles.home} flexDirection="column">
        <HStack>
          <VStack space={1} alignItems="center">
            <Stack direction="row" mb="2.5" mt="1.5" space={1}>
              <Center
                size="16"
                _text={{
                  // color: "warmGray.50",
                  color: "primary.400",
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <VoiceSpeaking />
              </Center>
              {/* footer goes here */}
            </Stack>
            {/* <ToggleDarkMode /> */}
          </VStack>
        </HStack>
      </View>
      {/* <ScrollView>main</ScrollView> */}
      <View style={(styles.footer)} flexDirection="column">
        <Footer />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    left: -15,
    top: -60
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxHeight: 70,
    minWidth: 360,
  },
});
export default Dashboard