const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./homepage-route');
router.use('/', homeRoutes);

const newListRoutes = require('./newList-route');
router.use('/create-list', newListRoutes);

const dashboardRoutes = require("./dashboard-route");
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
