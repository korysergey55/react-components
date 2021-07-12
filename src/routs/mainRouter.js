import ButtonSVGPage from "../pages/ButtonSVGPage";
import ClockPage from "../pages/ClockPage";
import FormAddPage from "../pages/FormAddPage";
import HomePage from "../pages/HomePage";
import IconSVGPage from "../pages/IconSVGPage";
import LoaderPage from "../pages/LoaderPage";
import ModalPage from "../pages/ModalPage";
import AuthPage from "../pages/AuthPage";

export const mainRouts = [
 {
  name: "Home",
  path: "/home",
  exact: true,
  component: HomePage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
 {
  name: "ButtonSVG",
  path: "/buttonSVG",
  exact: true,
  component: ButtonSVGPage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
 {
  name: "IconSVG",
  path: "/iconSVG",
  exact: true,
  component: IconSVGPage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
 {
  name: "Clock",
  path: "/clock",
  exact: true,
  component: ClockPage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
 {
  name: "LoaderPage",
  path: "/loader",
  exact: true,
  component: LoaderPage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
 {
  name: "FormAddPage",
  path: "/formAdd",
  exact: true,
  component: FormAddPage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
 {
  name: "ModalPage",
  path: "/modal",
  exact: true,
  component: ModalPage,
  isLink: true,
  isRegistered: false,
  isPrivate: true,
 },
 {
  name: "Registration",
  path: "/registration",
  exact: true,
  component: AuthPage,
  isLink: true,
  isRegistered: true,
  isPrivate: false,
 },
 {
  name: "Login",
  path: "/login",
  exact: true,
  component: AuthPage,
  isLink: true,
  isRegistered: false,
  isPrivate: false,
 },
];
