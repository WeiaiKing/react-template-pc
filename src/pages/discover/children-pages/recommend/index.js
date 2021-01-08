import React, { memo } from 'react'
import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from './c-cpns/hot-recommend';
import HYNewAlbum from './c-cpns/new-album';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function HYRecomment() {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className="wrap-v2">
        <HYHotRecommend></HYHotRecommend>
        <HYNewAlbum />
      </Content>

    </RecommendWrapper>
  )
}

export default memo(HYRecomment)