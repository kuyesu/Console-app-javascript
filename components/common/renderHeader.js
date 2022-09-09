import React, { useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

function renderHeader() {
        return (
            <View style={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.lightGray2,
                borderColor: COLORS.lightGray,
                borderBottomWidth: 2,
                position: "relative",
                top: -50,
                paddingTop: 50
            }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center',  }}>
                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 40,
                        width: 40,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                     <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Console</Text>
                </View>
                <Text style={{ ...FONTS.h6, color: COLORS.darkgray }}>Intelligent Diagnosis (private)</Text>
            </View>
        )
}

export default renderHeader