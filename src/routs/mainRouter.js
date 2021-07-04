import ButtonSVGPage from "../pages/ButtonSVGPage";
import ClockPage from "../pages/ClockPage";
import FormAddPage from "../pages/FormAddPage";
import HomePage from "../pages/HomePage";
import IconSVGPage from "../pages/IconSVGPage";
import LoaderPage from "../pages/LoaderPage";
import ModalPage from "../pages/ModalPage";
export const mainRouts = [
 {
  name: "home",
  path: "/home",
  exact: true,
  component: HomePage,
  isLink: true,
 },
 {
  name: "ButtonSVG",
  path: "/buttonSVG",
  exact: true,
  component: ButtonSVGPage,
  isLink: true,
 },
 {
  name: "IconSVG",
  path: "/iconSVG",
  exact: true,
  component: IconSVGPage,
  isLink: true,
 },
 {
  name: "Clock",
  path: "/clock",
  exact: true,
  component: ClockPage,
  isLink: true,
 },
 {
  name: "LoaderPage",
  path: "/loader",
  exact: true,
  component: LoaderPage,
  isLink: true,
 },
 {
  name: "FormAddPage",
  path: "/formAdd",
  exact: true,
  component: FormAddPage,
  isLink: true,
 },
 {
  name: "ModalPage",
  path: "/modal",
  exact: true,
  component: ModalPage,
  isLink: true,
 },
];
