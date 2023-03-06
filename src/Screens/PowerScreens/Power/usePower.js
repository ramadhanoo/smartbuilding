import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import CategoryActions from '../../../Redux/CategoryRedux';
import {useEffect, useState, useRef} from 'react';

export const usePower = () => {
  const dispatch = useDispatch();
  const themes = useSelector(ThemeSelectors.getColors);
  const categoryRedux = useSelector(state => state.category);
  const couponRedux = useSelector(state => state.coupon);
  useEffect(() => {
    // dispatch(CategoryActions.setCategoryReq({actionType: 'load'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshData = () => {
    // dispatch(CategoryActions.setCategoryReq({actionType: 'refresh'}));
  };

  const onPressDetail = item => {
    NavigationServices.push('home.detail', {data: item});
  };

  return {
    state: {
      themes,
      categoryRedux,
      couponRedux,
    },
    actions: {
      refreshData,
      onPressDetail,
    },
    data: {},
  };
};
