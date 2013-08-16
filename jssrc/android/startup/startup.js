//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "RootDetector",
    appName: "RootDetector",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.227.217",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "RootDetector",
    url: "https://kony475.server.konycloud.com/RootDetector/MWServlet",
    secureurl: "https://kony475.server.konycloud.com/RootDetector/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    frmRootDetectorGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_rootdetection"
    });
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;