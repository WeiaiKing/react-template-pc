import React from 'react';
import { Redirect } from "react-router-dom";
const HYDiscover = React.lazy(() => import("@/pages/discover"));
const HYRcommend = React.lazy(_ => import("../pages/discover/children-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/discover/children-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/discover/children-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/discover/children-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/discover/children-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/discover/children-pages/album"));
const HYPlayer = React.lazy(_ => import("../pages/player"));

const HYFriend = React.lazy(_ => import("../pages/friend"));
const HYMine = React.lazy(_ => import("../pages/mine"));

// import HYDiscover from "@/pages/discover";
// import HYMine from "@/pages/mine";
// import HYFriend from "@/pages/friend";
// import HYRcommend from "@/pages/discover/children-pages/recommend";
// import HYRanking from "@/pages/discover/children-pages/ranking";
// import HYSongs from "@/pages/discover/children-pages/songs";
// import HYArtist from "@/pages/discover/children-pages/artist";
// import HYDjradio from "@/pages/discover/children-pages/djradio";
// import HYAlbum from "@/pages/discover/children-pages/album";
// import HYPlayer from "@/pages/player";


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: HYRcommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/djradio",
        component: HYDjradio
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/player",
        component: HYPlayer
      }
    ]
  },
  {
    path: "/mine",
    component: HYMine
  },
  {
    path: "/friend",
    component: HYFriend
  },
];

export default routes;
