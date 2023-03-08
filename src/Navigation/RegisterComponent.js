import {Navigation} from 'react-native-navigation';

import App from '../Screens/AppStack/Appstack';
import Home from '../Screens/Home/Home';

import Camera from '../Screens/CameraScreens/Camera/Camera';
import Power from '../Screens/PowerScreens/Power/Power';
import Profile from '../Screens/ProfileScreens/Profile/Profile';
import Control from '../Screens/ControlScreens/Control/Control';

import ReduxWrapper from './ReduxWrapper';
import {NAVIGATION_NAME} from './NavigationName';
import CodePush from 'react-native-code-push';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

function RegisterComponentWrapper(identity, component) {
  Navigation.registerComponent(
    identity,
    () => ReduxWrapper(component),
    () => component,
  );
}

export default function () {
  RegisterComponentWrapper(NAVIGATION_NAME.APP, CodePush(CodePushOptions)(App));
  RegisterComponentWrapper(NAVIGATION_NAME.HOME.home, Home);
  RegisterComponentWrapper(NAVIGATION_NAME.CAMERA.camera, Camera);
  RegisterComponentWrapper(NAVIGATION_NAME.CONTROL.control, Control);
  RegisterComponentWrapper(NAVIGATION_NAME.POWER.power, Power);
  RegisterComponentWrapper(NAVIGATION_NAME.PROFILE.profile, Profile);
}
