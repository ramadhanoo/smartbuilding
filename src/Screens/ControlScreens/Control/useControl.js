import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import CategoryActions from '../../../Redux/CategoryRedux';
import {useEffect, useState, useRef} from 'react';

export const useControl = () => {
  const dispatch = useDispatch();
  const themes = useSelector(ThemeSelectors.getColors);
  const categoryRedux = useSelector(state => state.category);
  const couponRedux = useSelector(state => state.coupon);
  const [activeTab, setActiveTab] = useState('1');
  const [activeTabName, setActiveTabName] = useState('Departement 1');
  const [cardLeft, setCardLeft] = useState([]);
  const [cardRight, setcardRight] = useState([]);
  const scrolling = useRef(null);

  useEffect(() => {
    // dispatch(CategoryActions.setCategoryReq({actionType: 'load'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    separateArrays(categoryRedux.data[activeTabName]);
  }, [activeTabName, categoryRedux.data]);

  const actionsTabs = (id, index, name) => {
    scrolling.current?.scrollToIndex({
      animated: true,
      index: index,
      viewOffset: 70,
    });
    setActiveTab(id);
    setActiveTabName(name);
  };

  const refreshData = () => {
    // dispatch(CategoryActions.setCategoryReq({actionType: 'refresh'}));
  };

  const separateArrays = array => {
    console.tron.log('hahahah');
    let arr1 = [];
    let arr2 = [];
    for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        arr1.push(array[i]);
      } else {
        arr2.push(array[i]);
      }
    }
    setCardLeft([...arr1]);
    setcardRight([...arr2]);
  };

  const onPressDetail = item => {
    NavigationServices.push('home.detail', {data: item});
  };

  return {
    state: {
      cardLeft,
      cardRight,
      themes,
      setActiveTab,
      activeTab,
      categoryRedux,
      couponRedux,
      scrolling,
      activeTabName,
    },
    actions: {
      actionsTabs,
      refreshData,
      onPressDetail,
      setActiveTabName,
    },
    data: {},
  };
};
