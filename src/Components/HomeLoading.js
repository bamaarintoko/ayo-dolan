import React from 'react';
import {normalize, normalizeFont} from "../utils/func";
import {StyleSheet, View} from "react-native";
import Placeholder from 'rn-placeholder';
import {Text} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {LeftImage, LeftImagePH, RightImage, RightImagePh} from "./List";

const HomeLoading = () => {
    function a() {
        const results = [];
        for (let i = 0; i < 4; i++) {
            // console.log(i);
            results.push(

                    i % 2 === 0
                ?
                        <LeftImagePH key={i}/>
                        :
                        <RightImagePh key={i}/>


            )
        }
        return results;
    }

    return (
        <View>
            {a()}
        </View>
    );
};
const styles = StyleSheet.create({
    box_parent: {
        height: normalize(150 * .6),
        flex: 1, flexDirection: 'row',
    },
    box_child_image: {
        overflow: 'hidden',
        height: normalize(150 * .6),
        backgroundColor: '#FFFFFF',
        width: normalize(150 * .6),
        borderRadius: normalizeFont(3 * .7)
    },
    box_child_info: {
        marginLeft: 10,
        flex: 8,
        flexDirection: 'column'
    },
    box_child_footer: {
        height: 30, flex: 1, flexDirection: 'row', backgroundColor: '#E3F2FD', borderBottomLeftRadius: 5
    },
    footer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    text_footer: {
        paddingLeft: 5, fontSize: 12, color: '#000000'
    }
});
export default HomeLoading;
