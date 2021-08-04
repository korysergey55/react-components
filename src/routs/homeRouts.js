import {lazy} from 'react';
// import Egept from "../components/sea/Egept";
// import Grece from "../components/sea/Grece";
// import Turkish from "../components/sea/Turkish";

export const homeRouts = [
 {
  name: "Egept",
  path: "/egept",
  exact: true,
  component: lazy(() => import("../components/sea/Egept")),
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "Turkish",
  path: "/turkish",
  exact: true,
  component: lazy(() => import("../components/sea/Turkish")),
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "Grece",
  path: "/grece",
  exact: true,
  component: lazy(() => import("../components/sea/Turkish")),
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
];
