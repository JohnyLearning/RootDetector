//Form JS File
function frmRootDetector_btnCheckRoot_onClick_seq0(eventobject) {
    detectroot.call(this);
};

function addWidgetsfrmRootDetector() {
    var lbltitle = new kony.ui.Label({
        "id": "lbltitle",
        "isVisible": true,
        "text": "Is Your Phone Rooted?",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var line847954767392 = new kony.ui.Line({
        "id": "line847954767392",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var lblNotice = new kony.ui.Label({
        "id": "lblNotice",
        "isVisible": true,
        "text": "Simply click the button to check if your device has been rooted or jail broken.",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 3, 3, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var btnCheckRoot = new kony.ui.Button({
        "id": "btnCheckRoot",
        "isVisible": true,
        "text": "Check",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmRootDetector_btnCheckRoot_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 10, 3, 0],
        "padding": [10, 3, 10, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmRootDetector.add(
    lbltitle, line847954767392, lblNotice, btnCheckRoot);
};

function frmRootDetectorGlobals() {
    var MenuId = [];
    frmRootDetector = new kony.ui.Form2({
        "id": "frmRootDetector",
        "title": "Root Detector",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmBackImg",
        "addWidgets": addWidgetsfrmRootDetector
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};