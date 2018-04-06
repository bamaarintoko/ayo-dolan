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

                // <View key={i} style={{
                //     height: normalize(150 * .7),
                //     flexDirection: 'column',
                //     padding: 10,
                //     backgroundColor: '#FFFFFF'
                // }}>
                //     <View style={styles.box_parent}>
                //
                //         <View style={styles.box_child_image}>
                //             <Placeholder.Box
                //                 animate="fade"
                //                 height="100%"
                //                 width="100%"
                //                 radius={5}
                //                 color="#E0E0E0"
                //             />
                //         </View>
                //         <View style={styles.box_child_info}>
                //             <View style={{height: normalize(125 * .6)}}>
                //                 <Placeholder.Line
                //                     animate="fade"
                //                     color="#E0E0E0"
                //                     width="77%"
                //                 />
                //                 <View style={{marginTop: 5}}>
                //                     <Placeholder.Line
                //                         animate="fade"
                //                         color="#E0E0E0"
                //                         width="50%"
                //                     />
                //                 </View>
                //                 <View style={{marginTop: 5}}>
                //                     <Placeholder.Line
                //                         animate="fade"
                //                         color="#E0E0E0"
                //                         width="50%"
                //                     />
                //                 </View>
                //             </View>
                //             <View style={{flex: 1, flexDirection: 'row'}}>
                //                 <View style={{flex: 1}}>
                //                     <Text><Icon color={'#E0E0E0'} size={normalizeFont(3 * .7)}
                //                                 name="calendar-o"/></Text>
                //                 </View>
                //                 <View style={{flex: 1}}>
                //                     <Text><Icon color={'#E0E0E0'} size={normalizeFont(3 * .7)}
                //                                 name="clock-o"/></Text>
                //                 </View>
                //                 <View style={{flex: 1}}>
                //                     <Text><Icon color={'#E0E0E0'} size={normalizeFont(3 * .7)}
                //                                 name="user"/></Text>
                //                 </View>
                //             </View>
                //         </View>
                //     </View>
                // </View>
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
