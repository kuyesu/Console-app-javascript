import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

function Footer() {
  // const dashboard = () => {
  //   props.navigation.navigate("Homer");
  // };
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        safeAreaTop
        width="100%"
        alignSelf="center"
        style={(styles.footer)}
      >
        <HStack style={(styles.col)} alignItems="center" safeAreaBottom>
          <Pressable
            // cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPressIn={() => setSelected(0)}
            onPress={() => {
          navigation.navigate("Home");
        }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                style={styles.icon}
                size="lg"
              />
              <Text color={COLORS.primary} fontSize="14">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                style={styles.icon}
                size="lg"
              />
              <Text color={COLORS.primary} fontSize="14">
                Chat
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "doctor" : "doctor"}
                  />
                }
                style={styles.icon}
                size="lg"
              />
              <Text color={COLORS.primary} fontSize="14">
                History
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPressIn={() => setSelected(3)}
            onPress={() => navigation.navigate("Symptoms")}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                style={styles.icon}
                size="lg"
              />
              <Text color={COLORS.primary} fontSize="14">
                Symptoms
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  col: {
    backgroundColor: COLORS.lightGray2,
    borderColor: COLORS.lightGray,
    borderTopWidth: 2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    paddingTop: 4,
  },
  icon: {
    color: COLORS.red,
    fontSize: 25,
    paddingTop: 5,
  },
});

export default Footer;