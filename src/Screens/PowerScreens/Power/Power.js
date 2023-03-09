import React from 'react';
import styles from './Power.styles';
// import {useCamera} from './useCamera';
import {
  BaseScreens,
  CardVolt,
  Section,
  SectionFilter,
} from '../../../Components/index';
import {ScrollView, View} from 'react-native';
import {usePower} from './usePower';
import {Colors, Fonts, Images} from '../../../Themes';
import moment from 'moment';
import {DEPT} from '../../../Data/Constans';
import CardListDepartmentPower from './content/CardListDepartmentPower/CardListDepartmentPower';
import {BarChart} from 'react-native-chart-kit';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';
import {graphStyle, dataTestts, chartConfig} from '../../../Data/Constans';
import NavigationServices from '../../../Navigation/NavigationServices';
moment.locale('id');

const Power = props => {
  const {state, actions} = usePower();
  const {onPressDetail, actionsTabs, refreshData} = actions;
  const {categoryRedux, couponRedux, scrolling} = state;
  return (
    <BaseScreens
      safeAreaColor={Colors.whiteBackground}
      style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0, 3]}>
        <SectionFilter
          stylesTitleLeft={{fontFamily: Fonts.type.bold}}
          titleLeft={'Power Usage'}
          titleRight={'March 2023'}
          actionFilter={() => NavigationServices.showModal('modal.modalFilter')}
        />
        <View style={styles.chartContainer}>
          <BarChart
            data={dataTestts}
            style={graphStyle}
            withInnerLines={false}
            chartConfig={chartConfig}
            width={ScreenWidth}
            height={220}
          />
        </View>

        <CardVolt
          titleLeft={'Total Power Usage'}
          titleRight={'Expense Estimation'}
          textDescLeft={'832.7 KwH'}
          textDescRight={'IDR 4.927.000'}
        />
        <SectionFilter
          titleLeft={'Usage Detail'}
          stylesTitleLeft={{fontFamily: Fonts.type.bold}}
          titleRight={'Sort by dept'}
          actionFilter={() => NavigationServices.showModal('modal.modalFilter')}
        />
        <View style={styles.tabContainer}>
          <Section
            isLoading={false}
            shimmerSize={3}
            containerBodyStyle={styles.containerCard}
            loadingContainerStyles={styles.containerCard}
            loadingIndicatorStyle={styles.loadingStyle}>
            {DEPT.map((item, index) => {
              return (
                <CardListDepartmentPower
                  item={item}
                  indexkey={index}
                  key={index}
                />
              );
            })}
          </Section>
        </View>
      </ScrollView>
    </BaseScreens>
  );
};

Power.options = {
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

export default Power;
