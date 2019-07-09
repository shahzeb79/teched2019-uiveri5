exports.config = {
    profile: "integration",    
    //TODO Replace with url of deployed Shopping Cart
    baseUrl: "https://cqc-uiveri5demo2.cfapps.eu10.hana.ondemand.com/index.html",
    reporters : [
		{
			name : './reporter/junitReporter',
			reportName: './target/report/report.xml'
		},
		{
			name : './reporter/screenshotReporter',
			screenshotsRoot: './target/report'
		}],
    auth: {
      "sapcloud-form": {
        user: "${params.user}",
        pass: "${params.pass}",
        userFieldSelector: 'input[name="username"]',
        passFieldSelector: 'input[name="password"]',
        logonButtonSelector: 'input[type="submit"]',
      }
    }   
}
