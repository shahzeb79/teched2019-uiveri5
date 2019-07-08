exports.config = {
    profile: "integration",    
    //TODO Replace with url of deployed Shopping Cart
    baseUrl: "https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html",
    reporters : [
		{
			name : './reporter/junitReporter',
			reportName: './target/report/report.xml'
		},
		{
			name : './reporter/screenshotReporter',
			screenshotsRoot: './target/report'
		}]
    //auth: {
    //  "sapcloud-form": {
    //    user: "${params.user}",
    //    pass: "${params.pass}",
    //    userFieldSelector: 'input[name="username"]',
    //    passFieldSelector: 'input[name="password"]',
    //    logonButtonSelector: 'input[type="submit"]',
    //  }
    //}   
}
