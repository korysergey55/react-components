import ButtonSVGPage from "../pages/ButtonSVGPage";
import ClockPage from "../pages/ClockPage";
import FormAddPage from "../pages/FormAddPage";
import HomePage from "../pages/HomePage";
import HomeDeteilsPage from "../pages/HomeDeteilsPage";
import IconSVGPage from "../pages/IconSVGPage";
import LoaderPage from "../pages/LoaderPage";
import ModalPage from "../pages/ModalPage";
import AuthPage from "../pages/AuthPage";
import FormikPage from "../pages/FormikPage";
import NotFoundComponent from "./NotFoundComponent";

export const mainRouts = [
 {
  name: "Home",
  path: "/home",
  exact: false,
  component: HomePage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "HomeDeteils",
  path: "/home/:country",
  exact: true,
  component: HomeDeteilsPage,
  isLink: false,
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
  name: "Loader",
  path: "/loader",
  exact: true,
  component: LoaderPage,
  isLink: true,
  isPrivate: false,
  isRegistered: false,
 },
 {
  name: "FormAdd",
  path: "/formAdd",
  exact: true,
  component: FormAddPage,
  isLink: true,
  isPrivate: true,
  isRegistered: false,
 },
 {
  name: "Modal",
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
 {
  name: "notFound",
  exact: true,
  component: NotFoundComponent,
  isLink: false,
  isPrivate: false,
  isRegistered: false,
 },
];
