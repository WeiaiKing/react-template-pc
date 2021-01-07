import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from '../../store/actionCreators';
function HYTopBanner() {
  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);

  // 组件和redux关联：获取数据和进行操作
  const dispatch = useDispatch();
  // 发送网络请求
  useEffect(() => {
    console.log('发送请求')
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <div>
      <h2>HYTopBanner</h2>
    </div>
  )
}

export default memo(HYTopBanner)