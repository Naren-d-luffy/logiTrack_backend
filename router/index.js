import { Router } from "express";
import adminRouter from "./Admin/adminRoute.js"
import itemRoute from "./Item/itemRoute.js"

const router = Router();

const defaultRoutes = [
    {
        path: "/admin",
        route: adminRouter
    },
    {
        path: "/items",
        route: itemRoute
    }
];

defaultRoutes.forEach(({ path, route }) => {
    router.use(path, route);
});

export default router;
