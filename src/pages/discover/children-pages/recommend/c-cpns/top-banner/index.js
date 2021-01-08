import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from '../../store/actionCreators';
import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';
function HYTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  /**
   * 我的目的是获取到数据之后存储在redux,但是发送异步请求需要用到thunk
   * 通过react-redux 提供的hook函数，useDispatch()
   * 执行的是 dispatch=>{
   * changeTopBannerAction 这个就是action的类型和数据了吧
   * }
   * 
   * 1.一个请求的action，一个是存储请求数据的action
   * 2.reducer是一个纯函数   action发生改变应该在纯函数中进行，这样不产生副作用
   * 3.三要素->store state reducer
   * */

  // 组件和redux关联：获取数据和进行操作
  const dispatch = useDispatch();
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);

  // 其他hooks
  const bannerRef = useRef();
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);
  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(HYTopBanner)