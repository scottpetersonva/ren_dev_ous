import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/sign-up", name: "LoginPage", component: LoginPage },
  { path: "/components", name: "Components", component: Components },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;