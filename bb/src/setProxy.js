const proxy = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		proxy("/api", {
			target : "http://http://3.20.136.175:3002"
		});
	)
};
