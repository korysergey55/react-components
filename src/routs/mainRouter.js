import ButtonSVGPage from "../pages/ButtonSVGPage";
import ClockPage from "../pages/ClockPage";
import FormAddPage from "../pages/FormAddPage";
import HomePage from "../pages/HomePage";
import IconSVGPage from "../pages/IconSVGPage";
import LoaderPage from "../pages/LoaderPage";
import ModalPage from "../pages/ModalPage";
import AuthPage from "../pages/AuthPage";
import FormikPage from "../pages/FormikPage";

export const mainRouts = [
 {
  name: "Home",
  path: "/home",
  exact: true,
  component: HomePage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "ButtonSVG",
  path: "/buttonSVG",
  exact: true,
  component: ButtonSVGPage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "IconSVG",
  path: "/iconSVG",
  exact: true,
  component: IconSVGPage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "Clock",
  path: "/clock",
  exact: true,
  component: ClockPage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "LoaderPage",
  path: "/loader",
  exact: true,
  component: LoaderPage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "FormAddPage",
  path: "/formAdd",
  exact: true,
  component: FormAddPage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "ModalPage",
  path: "/modal",
  exact: true,
  component: ModalPage,
  isLink: true,
  isPrivate: true,
  isRegistered: false,
 },
 {
  name: "Formik",
  path: "/formik",
  exact: true,
  component: FormikPage,
  isLink: true,
  isPrivate: true,
  isRegistered: false,
 },
 {
  name: "Registration",
  path: "/registration",
  exact: true,
  component: AuthPage,
  isLink: true,
  isPrivate: false,
  isRegistered: true,
 },
 {
  name: "Login",
  path: "/login",
  exact: true,
  component: AuthPage,
  isLink: true,
  isPrivate: false,
  isRegistered: true,
 },
];
