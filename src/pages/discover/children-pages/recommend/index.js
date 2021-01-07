import React, { memo } from 'react'

import HYTopBanner from './c-cpns/top-banner';

function HYRecomment() {
  return (
    <div>
      <HYTopBanner />
      <h2>HYRecomment</h2>
    </div>
  )
}

export default memo(HYRecomment)