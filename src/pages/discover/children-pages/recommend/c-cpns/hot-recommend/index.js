import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';
import { getHotRecommendAction } from '../../store/actionCreators';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';

import {
  HotRecommendWrapper
} from './style';

export default memo(function HYHotRecommend() {
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <HYSongsCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})