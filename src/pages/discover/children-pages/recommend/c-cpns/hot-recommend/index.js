import React, { memo } from 'react';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import {
  HotRecommendWrapper
} from './style';
export default memo(function HYHotRecommend() {
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
    </HotRecommendWrapper>
  )
})