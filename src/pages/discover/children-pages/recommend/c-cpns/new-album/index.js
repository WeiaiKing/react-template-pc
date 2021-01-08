import React, { memo, useEffect, useRef } from "react"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYAlbumCover from '@/components/album-cover';
import { Carousel } from 'antd';

import { getNewAlbumAction } from '../../store/actionCreators';

import { AlbumWrapper } from './style';

export default memo(function HYNewAlbum() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const pageRef = useRef()

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <HYAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </AlbumWrapper>
  )
})