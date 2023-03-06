import {Navigation} from 'react-native-navigation';
import {NAVIGATION_NAME} from './NavigationName';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../Themes';
import { Button } from '../Components';

async function prepareIcons() {
  const icons = await Promise.all([
    MaterialCommunityIcons.getImageSource('tune-vertical', 22),
    MaterialIcons.getImageSource('camera', 22),
    Fontisto.getImageSource('power', 22),
    Ionicons.getImageSource('ios-person-circle-sharp', 22),
  ]);

  const [control, camera, power, profile] = icons;
  return {control, camera, power, profile};
}

// sample to set Auth.login screen as Root Screen
function setRootSpalsh() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'auth',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.APP,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}

function setRootWelcome() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'welcome',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.WELCOME.welcome,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}

function setRootMain() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'HOME',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.HOME.home,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}

async function setRootHome() {
  const icons = await prepareIcons();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MAIN_STACK_CTM',
        children: [
          {
            bottomTabs: {
              id: 'bottom_tab_main_ota',
              children: [
                {
                  component: {
                    name: NAVIGATION_NAME.HOME.home,
                    options: {
                      bottomTab: {
                        text: 'Home',
                        textColor: Colors.greyTabs,
                        fontSize: 10,
                        selectedFontSize: 10,
                        iconHeight: 28,
                        selectedTextColor: Colors.mainColor,
                        iconColor: Colors.greyTabs,
                        selectedIconColor: Colors.mainColor,
                        icon: icons.home,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

async function setRootDashboard() {
  const icons = await prepareIcons();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MAIN_STACK',
        children: [
          {
            bottomTabs: {
              id: 'bottom_tab_main',
              children: [
                {
                  component: {
                    name: NAVIGATION_NAME.CONTROL.control,
                    options: {
                      bottomTab: {
                        component: () => <Button />,
                        text: 'Control Center', // Optional
                        textColor: Colors.greyTabs, // Optional
                        selectedTextColor: Colors.blueSmartBuilding,
                        icon: icons.control, // Optional
                        iconColor: Colors.greyTabs,
                        selectedIconColor: Colors.blueSmartBuilding,
                        iconHeight: 28,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: NAVIGATION_NAME.CAMERA.camera,
                    options: {
                      bottomTab: {
                        text: 'Camera', // Optional
                        textColor: Colors.greyTabs, // Optional
                        selectedTextColor: Colors.blueSmartBuilding,
                        iconHeight: 28,
                        icon: icons.camera, // Optional
                        iconColor: Colors.greyTabs,
                        selectedIconColor: Colors.blueSmartBuilding,
                        // icon: Images.iconTabManageTripInactive, // Optional
                        // selectedIcon: Images.iconTabManageTrip,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: NAVIGATION_NAME.POWER.power,
                    options: {
                      bottomTab: {
                        text: 'Power Usage', // Optional
                        textColor: Colors.greyTabs, // Optional
                        selectedTextColor: Colors.blueSmartBuilding,
                        //icon: icons.route, // Optional
                        //iconColor: Colors.greyTabs,
                        //selectedIconColor: Colors.blueSmartBuilding,
                        icon: icons.power, // Optional
                        iconColor: Colors.greyTabs,
                        selectedIconColor: Colors.blueSmartBuilding,
                        iconHeight: 28,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: NAVIGATION_NAME.PROFILE.profile,
                    options: {
                      bottomTab: {
                        text: 'Profile', // Optional
                        textColor: Colors.greyTabs, // Optional
                        selectedTextColor: Colors.blueSmartBuilding,
                        //icon: icons.calendar, // Optional
                        icon: icons.profile, // Optional
                        iconColor: Colors.greyTabs,
                        selectedIconColor: Colors.blueSmartBuilding,
                        iconHeight: 28,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

export default {
  setRootSpalsh,
  setRootWelcome,
  setRootHome,
  setRootMain,
  setRootDashboard,
};
