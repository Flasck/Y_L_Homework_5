module.exports = {
	browsers: {
		chromeLast: {
			automationProtocol: "devtools",
			desiredCapabilities: { browserName: "chrome" },
		},
	},
	plugins: {
		"html-reporter": {
			path: "./test/hermione/hermione-html-reporter",
		},
	},
	screenshotsDir: "./test/hermione/screens",
}
