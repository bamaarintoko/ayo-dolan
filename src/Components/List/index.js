import React from 'react';
import {normalize} from "../../utils/func";
import {Image, View} from "react-native";
import Placeholder from 'rn-placeholder';

export const LeftImage = ({children, img}) => {
    let pict = 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
    let image = img === undefined || img === "" ? pict : img
    return (
        <View style={{height: 115, marginLeft: 10, marginRight: 10}}>
            {console.log(img)}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 40,
                borderRadius: 5,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#FFFFFF'
            }}>
                <View style={{width: normalize(150 * .3)}}>
                </View>
                <View style={{flex: 1}}>
                    {children}
                </View>
            </View>
            <View style={{
                height: 85,
                overflow: 'hidden',
                borderRadius: 5,
                marginTop: 15,
                width: 85,
                position: 'absolute',
                backgroundColor: 'red'
            }}>
                <Image
                    style={{width: normalize(150 * .5), height: normalize(150 * .5)}}
                    source={{uri: image}}
                />
            </View>


        </View>
    );
};

export const RightImage = ({children, img}) => {
    let pict = 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png'
    let image = img === undefined || img === "" ? pict : img
    return (
        <View style={{height: 115, marginLeft: 10, marginRight: 10}}>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                left: 0,
                marginRight: 40,
                borderRadius: 5,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#FFFFFF'
            }}>
                <View style={{flex: 1}}>
                    {children}
                </View>
                <View style={{width: normalize(150 * .3),}}>
                </View>
            </View>
            <View style={{
                height: 85,
                overflow: 'hidden',
                right: 0,
                borderRadius: 5,
                marginTop: 15,
                width: 85,
                position: 'absolute',
                backgroundColor: 'red'
            }}>
                <Image
                    style={{width: normalize(150 * .5), height: normalize(150 * .5)}}
                    source={{uri: image}}
                />
            </View>


        </View>
    );
};

// import React from 'react';
// import React from 'react';

export const RightImagePh = () => {
    return (
        <View style={{height: 115, marginLeft: 10, marginRight: 10}}>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                left: 0,
                marginRight: 40,
                borderRadius: 5,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#FFFFFF'
            }}>
                <View style={{flex: 1,marginTop:5, marginLeft:5}}>
                    <Placeholder.Line
                        animate="fade"
                        color="#E0E0E0"
                        width="77%"
                    />
                    <View style={{marginTop: 5}}>
                        <Placeholder.Line
                            animate="fade"
                            color="#E0E0E0"
                            width="50%"
                        />
                    </View>
                    <View style={{marginTop: 5}}>
                        <Placeholder.Line
                            animate="fade"
                            color="#E0E0E0"
                            width="50%"
                        />
                    </View>
                </View>
                <View style={{width: normalize(150 * .3),}}>

                </View>
            </View>
            <View style={{
                height: 85,
                overflow: 'hidden',
                right: 0,
                borderRadius: 5,
                marginTop: 15,
                width: 85,
                position: 'absolute',
                backgroundColor: 'red'
            }}>
                <View style={{width: normalize(150 * .5), height: normalize(150 * .5)}}>
                    <Placeholder.Box
                        animate="fade"
                        height="100%"
                        width="100%"
                        radius={5}
                        color="#E0E0E0"
                    />
                </View>
            </View>


        </View>
    );
};

export const LeftImagePH = () => {
    return (
        <View style={{height: 115, marginLeft: 10, marginRight: 10}}>
            {/*{console.log(img)}*/}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 40,
                borderRadius: 5,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#FFFFFF'
            }}>
                <View style={{width: normalize(150 * .3)}}>
                </View>
                <View style={{flex: 1, marginTop:5}}>
                        <Placeholder.Line
                            animate="fade"
                            color="#E0E0E0"
                            width="77%"
                        />
                        <View style={{marginTop: 5}}>
                            <Placeholder.Line
                                animate="fade"
                                color="#E0E0E0"
                                width="50%"
                            />
                        </View>
                        <View style={{marginTop: 5}}>
                            <Placeholder.Line
                                animate="fade"
                                color="#E0E0E0"
                                width="50%"
                            />
                        </View>
                </View>
            </View>
            <View style={{
                height: 85,
                overflow: 'hidden',
                borderRadius: 5,
                marginTop: 15,
                width: 85,
                position: 'absolute',
                backgroundColor: 'red'
            }}>
                <View style={{width: normalize(150 * .5), height: normalize(150 * .5)}}>
                    <Placeholder.Box
                        animate="fade"
                        height="100%"
                        width="100%"
                        radius={5}
                        color="#E0E0E0"
                    />
                </View>
            </View>


        </View>
    );
};

// export default LeftImagePH;



