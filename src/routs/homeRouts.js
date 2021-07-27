import Egept from "../components/sea/Egept";
import Grece from "../components/sea/Grece";
import Turkish from "../components/sea/Turkish";

export const homeRouts = [
 {
  name: "Egept",
  path: "/egept",
  exact: true,
  component: Egept,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "Turkish",
  path: "/turkish",
  exact: true,
  component: Turkish,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "Grece",
  path: "/grece",
  exact: false,
  component: Grece,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
];
