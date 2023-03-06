import React from 'react';
import styles from './Camera.styles';
import {useCamera} from './useCamera';
import {BaseScreens, Header, Section} from '../../../Components/index';
import {FlatList, Text, View} from 'react-native';
import {Colors, Images} from '../../../Themes';
import moment from 'moment';
import {CCTV_DATA} from '../../../Data/Constans';
import CardCctv from './content/CardCctv/CardCctv';
moment.locale('id');

const Camera = props => {
  const {state, actions} = useCamera();
  const {} = actions;
  const {} = state;
  return (
    <BaseScreens
      safeAreaColor={Colors.whiteBackground}
      style={styles.container}>
      <View style={styles.headerTextCard}>
        <Text style={styles.headerText}>CCTV Monitoring</Text>
      </View>

      <View style={styles.tabContainer}>
        <Section
          isLoading={false}
          shimmerSize={3}
          containerBodyStyle={styles.containerCard}
          loadingContainerStyles={styles.containerCard}
          loadingIndicatorStyle={styles.loadingStyle}>
          <FlatList
            contentContainerStyle={styles.containerStyleScroll}
            showsVerticalScrollIndicator={false}
            data={CCTV_DATA}
            renderItem={({item, index}) => {
              return <CardCctv />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Section>
      </View>
    </BaseScreens>
  );
};

Camera.options = {
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: Colors.whiteCard,
  },
  navigationBar: {
    backgroundColor: Colors.whiteCard,
  },
};

export default Camera;
