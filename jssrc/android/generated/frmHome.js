//Form JS File
function frmHome_btnContinue_onClick_seq0(eventobject) {
    frmRootDetector.show();
};

function addWidgetsfrmHome() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "text": "This application demonstrates the use of an FFI to perform root detection on a device.",
        "skin": "sknLblNormalBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 0, 3, 0],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbxInfo = new kony.ui.Box({
        "id": "hbxInfo",
        "isVisible": true,
        "skin": "sknHbxBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 3, 2],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxInfo.add(
    lblInfo);
    var btnContinue = new kony.ui.Button({
        "id": "btnContinue",
        "isVisible": true,
        "text": "Continue",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmHome_btnContinue_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 10, 3, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "containerWeight": 6
    }, {});
    frmHome.add(
    hbxInfo, btnContinue);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "Home",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmBackImg",
        "addWidgets": addWidgetsfrmHome
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
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