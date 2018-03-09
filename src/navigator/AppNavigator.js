import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {
    BackHandler, View, StatusBar
} from 'react-native';
import screenHome from '../screen/home/screen_home'
import screenSplash from '../screen/splash/screen_splash'
import ViewDetailMessage from '../screen/message/screen-detail-message'
// import screenAdd from '../screen/home/screen_add'
// import screenDetail from '../screen/detail/screen_detail'
// import screenAddDet from '../screen/detail/screen_add_det'
import LoginScreen from '../screen/login/Login'
// import screen_parent from '../screen/warehouse_bill/screen_parent'
// import {Setting, ChangePassword, EditWarehouse} from '../screen/setting'
// import {InComingItems, Test, OutGoingItems,DetailOutGoingItems,DetailIncomingItems} from '../screen/warehouse'
import {addNavigationHelpers, DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import {connect} from "react-redux";
import Drawer from './Drawer'
// import AppDrawer from './AppDrawer'
import {Container, Content, List, ListItem, Separator, Thumbnail} from "native-base";
import { addListener } from '../utils/Redux';
import ViewLocation from "../screen/location/screen-location";
import ViewMessage from "../screen/message/screen-message";
import ViewProfile from "../screen/profile/screen-profile";
import HomePage from "../screen/home/home_page";
const MyApp = TabNavigator({
    Homee: {
        screen: HomePage,
    },
    Location : {
        screen :ViewLocation
    },
    Message : {
        screen : ViewMessage
    },
    Profile : {
        screen : ViewProfile
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:false,
    lazy: true,
    tabBarOptions: {
        lazy: true,
        showIcon: true,
        showLabel:false,
        activeTintColor: '#03A9F4',
        inactiveTintColor: 'gray',
        labelStyle: {
            color: '#424242'
        },
        style: {
            backgroundColor: 'white',
        },
    },
})

const sideBar = DrawerNavigator({
    Home: {screen: MyApp},

}, {
    contentComponent: Drawer
    // contentComponent: AppDrawer
});


export const AppNavigator = StackNavigator({
    Splash: {screen: screenSplash},
    Login: {screen: LoginScreen},
    // // Menu: {screen: AppDrawer},
    Menu: {screen: sideBar},
    // Add: {screen: screenAdd},
    DetailMessage: {screen: ViewDetailMessage},
    // AddDet: {screen: screenAddDet},
    // InComingItems: {screen: InComingItems},
    // OutGoingItems: {screen: OutGoingItems},
    // DetailOutGoingItems: {screen: DetailOutGoingItems},
    // Setting: {screen: Setting},
    // ChangePassword: {screen: ChangePassword},
    // EditWarehouse: {screen: EditWarehouse},
    // DetailIncomingItems_: {screen: DetailIncomingItems},
    // Test_: {screen: Test},
    // MyApp: {screen: screen_parent}

}, {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: true
    }
});

class AppWithNavigationState extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
            // console.log("-->", this.props.redAuth)
        BackHandler.addEventListener('hardwareBackPress', function () {
            const {dispatch, navigation, nav} = this.props;

            if (nav.routes.length === 1) {
                // console.log("-->", this.props.nav)
                BackHandler.exitApp()
                return false;
            }
            dispatch({type: 'Navigation/BACK'});
            return true;
        }.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (            
            <AppNavigator navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav,addListener})}/>
            
        )
    }
};

function mapStateToProps(state) {
    return {
        nav: state.nav,
        redAuth:state.redAuth
    };
}


export default connect(mapStateToProps)(AppWithNavigationState);