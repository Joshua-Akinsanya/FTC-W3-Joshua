import { sidebarSetup } from "./components/sidebar.js";
import { filterSetup } from "./components/filter.js";

sidebarSetup('#sidebar', '#sidebar-backlayer', '#open-sidebar-button', '#close-sidebar-button');

filterSetup('#filter-menu', '#filter-button', '#filter-backlayer');