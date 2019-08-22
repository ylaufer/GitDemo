$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/CreateSysUser.feature");
formatter.feature({
  "name": "create Systems user",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Do create systems user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am in \"http://localhost:3001/candidates/allCandidates\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on add candidate",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter first name \"candAutoFN\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter last name \"candAutoLN\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter email \"candauto@candauto.com\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter mobile number \"123456789\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter work experience \"this is my work experience\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I select profile tag \"Junior\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on add applicant button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I get a success dialog box",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/Features/Login.feature");
formatter.feature({
  "name": "login to Interviews",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Do login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I go to \"http://localhost:3001/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.I_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"rrhh@endava.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_enter_username(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EN1710017\u0027, ip: \u0027172.19.187.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Ylaufer\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52796}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 47893289de18c57e09d4564d1f323072\n*** Element info: {Using\u003did, value\u003dexampleInputEmail1}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Steps.Login.I_enter_username(Login.java:26)\r\n\tat ✽.I enter username \"rrhh@endava.com\"(file:src/test/Features/Login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am able to login to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.I_am_able_to_login_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Do not login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I go to \"http://localhost:3001/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.I_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"rrhh@endava.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.I_enter_username(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EN1710017\u0027, ip: \u0027172.19.187.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\Ylaufer\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 68230589f59dbcc6bf0c8c9db9ae0b48\n*** Element info: {Using\u003did, value\u003dexampleInputEmail1}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Steps.Login.I_enter_username(Login.java:26)\r\n\tat ✽.I enter username \"rrhh@endava.com\"(file:src/test/Features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter password \"fruta\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I am not able to login to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.I_am_not_able_to_login_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
});