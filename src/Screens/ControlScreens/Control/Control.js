import React from 'react';
import styles from './Control.styles';
// import {useCamera} from './useCamera';
import {
  BaseScreens,
  CardVolt,
  Header,
  Section,
} from '../../../Components/index';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {useControl} from './useControl';
import {Colors, Images} from '../../../Themes';
import moment from 'moment';
import FilterTab from './content/FilterTab/FilterTab';
import {CATEGORY} from '../../../Data/Constans';
import AllDeviceCard from './content/AllDeviceCard/AllDeviceCard';
import AcCard from './content/AcCard/AcCard';
import LampCard from './content/LampCard/LampCard';
moment.locale('id');

const Control = props => {
  const {state, actions} = useControl();
  const {actionsTabs, sendData, onChangeLamp} = actions;
  const {scrolling, activeTab, cardRight, cardLeft} = state;

  return (
    <BaseScreens
      safeAreaColor={Colors.whiteBackground}
      style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}>
        <Header username={'Manusia Total'} />
        <CardVolt />
        <View style={styles.tabContainer}>
          <Section
            isLoading={false}
            shimmerSize={4}
            containerBodyStyle={styles.containerCard}
            loadingContainerStyles={styles.containerCard}
            loadingIndicatorStyle={styles.loadingStyle}>
            <FlatList
              ref={scrolling}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={CATEGORY}
              renderItem={({item, index}) => {
                return (
                  <FilterTab
                    key={index}
                    indexData={index}
                    data={item}
                    activeTab={activeTab}
                    onPressItem={actionsTabs}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </Section>
        </View>
        <View style={styles.controlCardContainer}>
          <View style={styles.containerLeft}>
            {cardLeft.map((item, index) => {
              if (item.category === 'ALL') {
                return (
                  <AllDeviceCard
                    onPressData={sendData}
                    key={index}
                    title={item.name}
                    status={item.status}
                    stylesCard={styles.cardSample(index, item.color)}
                  />
                );
              } else if (item.category === 'AC') {
                return (
                  <AcCard
                    key={index}
                    title={item.name}
                    status={item.status}
                    stylesCard={styles.cardSample(index, item.color)}
                  />
                );
              } else {
                return (
                  <LampCard
                    key={index}
                    kategori={item.category}
                    colorIconText={item.colorIconText}
                    title={item.name}
                    status={item.status}
                    categoryId={item.categoryId}
                    onChangeLamp={onChangeLamp}
                    stylesCard={styles.cardSample(index, item.color)}
                  />
                );
              }
            })}
          </View>
          <View style={styles.containerRight}>
            {cardRight.map((item, index) => {
              if (item.category === 'ALL') {
                return (
                  <AllDeviceCard
                    onPressData={sendData}
                    key={index}
                    title={item.name}
                    status={item.status}
                    stylesCard={styles.cardSample(index, item.color)}
                  />
                );
              } else if (item.category === 'AC') {
                return (
                  <AcCard
                    key={index}
                    title={item.name}
                    status={item.status}
                    stylesCard={styles.cardSample(index, item.color)}
                  />
                );
              } else {
                return (
                  <LampCard
                    key={index}
                    kategori={item.category}
                    colorIconText={item.colorIconText}
                    title={item.name}
                    categoryId={item.categoryId}
                    status={item.status}
                    onChangeLamp={onChangeLamp}
                    stylesCard={styles.cardSample(index, item.color)}
                  />
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
      <SafeAreaView style={styles.bottomArea} />
    </BaseScreens>
  );
};

Control.options = {
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

export default Control;
