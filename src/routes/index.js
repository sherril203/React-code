const { Router } = require("express");
const router = Router();

const accountRouter = require("./account.route");
const authRouter = require("./auth.route");
const dashboardRouter = require("./dashboard.route");
const product = require("./product.route");
const fileRouter = require("./file.route");

const routes = [
  {
    path: "/account",
    route: accountRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/dashboard",
    route: dashboardRouter,
  },
  {
    path: "/product",
    route: product,
  },
  {
    path: "/file",
    route: fileRouter,
  },
];

routes.forEach((r) => {
  router.use(r.path, r.route);
});

module.exports = router;
