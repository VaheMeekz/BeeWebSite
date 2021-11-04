import {
    ABOUT_PAGE,
    BLOG_PAGE,
    HOME_PAGE,
    PORTFOLIO_PAGE,
    SERVICES_PAGE,
    TEAM_PAGE,
    TECNOLOGISE_PAGE
} from "../urls/urls";
import About from "../../components/about/about";
import Services from "../../components/services/services";
import Portfolio from "../../components/portfolio/portfolio";
import Tecnologies from "../../components/tecnologise/tecnologies";
import Team from "../../components/team/team";
import Blog from "../../components/blog/blog";
import App from "../../App";


export const routes = [
    {path: HOME_PAGE, component: App, name: 'Home'},
    {path: ABOUT_PAGE, component: About, name: 'Home'},
    {path: SERVICES_PAGE, component: Services, name: 'Home'},
    {path: PORTFOLIO_PAGE, component: Portfolio, name: 'Home'},
    {path: TECNOLOGISE_PAGE, component: Tecnologies, name: 'Home'},
    {path: TEAM_PAGE, component: Team, name: 'Home'},
    {path: BLOG_PAGE, component: Blog, name: 'Home'},
]