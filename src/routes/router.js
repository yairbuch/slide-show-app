import PAGES from "../models/pageModel.js";
import { HOME_PAGE, ABOUT_PAGE, EROR_PAGE, LOGIN_PAGE, CREATE_PIC_Page } from "../services/domService.js";

export const onChangePage = page => {
    HOME_PAGE.className = "d-none";
    ABOUT_PAGE.className = "d-none";
    EROR_PAGE.className = 'd-none';
    LOGIN_PAGE.className = "d-none";
    CREATE_PIC_Page.className = "d-none";
    if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
    if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
    if (page === PAGES.EROR) return (EROR_PAGE.className = "d-block");
    if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
    if (page === PAGES.CREATE_PIC) return (CREATE_PIC_Page.className = "d-block");
};
