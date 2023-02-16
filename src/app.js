import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
import { HOME_PAGE_LINK, ABOUT_PAGE_LINK, EROR_PAGE_LINK, LOGIN_PAGE_LINK, CREATE_PIC_PAGE_LINK } from "./services/domService.js";

/********* האזנה לאירועים **********/
// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
EROR_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.EROR));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
CREATE_PIC_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.CREATE_PIC));

