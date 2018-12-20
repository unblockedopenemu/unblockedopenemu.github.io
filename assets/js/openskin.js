// OpenSkinJS v2.1.8 (Eclipse Edition) (c) HeyItsShuga. Licensed under MIT.
console.log("%c[OpenSkin] %c Loading application \"" + openskin + "\"", "color:#358311", "color: gray");

function sanLite(str) {
  str = String(str).replace(/undefined|nil|null|\<|\>|\{|\}/g,"");
  return str;
}
function sanCustom(str) {
  str = String(str).replace(/undefined|nil|null/g,"");
  return str;
}

var OpenSkin_jsonContents;
var OpenSkin_jsonAppName = openskin;
function OpenSkin() {
  this.application = openskin

  // default: remote JSON file
  this.get = function(url, loadAfter) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request.onload = function() {
        request.onerror = function() {
            throw "Invalid URL."
        }
        if (request.status >= 200 && request.status < 400) {
            OpenSkin_jsonContents = JSON.parse(request.responseText);
        } else {
            throw "Can't access data."
        }
        if(loadAfter == true) {
            OpenSkin.load()
        }
        return OpenSkin_jsonContents;
        }
    }


   // import via remote JSON file
   // duplicate of this.get so removing!
    this.getJSON = function(url, loadAfter) {
        this.get(url, loadAfter);
        return OpenSkin_jsonContents;
    }
   this.getStr = function(str, loadAfter) {
     OpenSkin_jsonContents = JSON.parse(str);
     if(loadAfter == true) {
        this.load()
     }
     return OpenSkin_jsonContents;
    }
   // import via object
   this.getObj = function(str, loadAfter) {
    OpenSkin_jsonContents = str;
    if(loadAfter == true) {
        this.load()
    }
    return OpenSkin_jsonContents;
   }

  this.load = function() {
    var element = "";

    element += ".subnavbar, .navbar, .navbar-inner, .searchbar, .ios .navbar .title, .statusbar {" + sanLite(OpenSkin_jsonContents.styles[0].header) + ";" + "}";
    element += ".md .navbar-inner, .md .statusbar, .md {" + sanLite(OpenSkin_jsonContents.styles[0].mdHeader) + ";" + "}";
    element += ".md .tabBar{" + sanLite(OpenSkin_jsonContents.styles[0].navbar) + ";" + "}";
    element += ".ios .icon:not(.fab-ico):not(.ico-colored-bkg), .ico-white-bkg {" + sanLite(OpenSkin_jsonContents.styles[0].iOSicon) + ";" + "}";
    element += ".md .icon:not(.fab-ico):not(.ico-white-bkg):not(.color-black):not(.actions-button-media>i), .ico-colored-bkg {" + sanLite(OpenSkin_jsonContents.styles[0].MDicon) + ";" + "}";

    element += ".md .tab-link:not(.tab-link-active) :not(.fab-ico), .md .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0].MDoutOfFocus) + ";" + "}";
    element += ".ios .tab-link:not(.tab-link-active) :not(.fab-ico), .ios .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0].iOSoutOfFocus) + ";" + "}";
    element += ".md .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0].MDinFocus) + ";" + "}";
    element += ".ios .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0].iOSinFocus) + ";" + "}";
    element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0].MDtoggleHead) + ";" + "}";
    element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0].MDtoggleBody) + ";" + "}";
    element += ".ios .toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0].iOStoggleHead) + ";" + "}";
    element += ".ios .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0].iOStoggleBody) + ";" + "}";
    element += ".fabCircle {" + sanLite(OpenSkin_jsonContents.styles[0].fab) + ";" + "}";
    element += ".tint, .ios .color-theme-red a, .ios a, .back > span, .back > div, .ios .searchbar-disable-button, .ios .color-theme-red .searchbar-disable-button {" + sanLite(OpenSkin_jsonContents.styles[0].tint) + ";" + "}";
    try { // Back arrow: create svg to go with given color value. Potentially unstable.
        color = sanLite(OpenSkin_jsonContents.styles[0].tint).replace("!important","").replace(" ","");
        color = /color:?(.*)(;|$)?/g.exec(color)[1].replace(";","");
        svgCode = "<svg width=\"12\" height=\"20\" viewBox=\"0 0 12 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.18261596 9.4221638c.0352203-.05148305.07573462-.10050698.1215468-.14631917L9.1425872.4374202c.5830904-.58309038 1.52656832-.5849888 2.11643872.00488163.5857864.58578644.591222 1.53009836.0048816 2.11643873L3.82594417 9.9967039l7.43188553 7.4318855c.5830904.5830904.5849888 1.5265683-.0048817 2.1164387-.5857864.5857865-1.5300983.591222-2.11643868.0048816L.2980849 10.7114853c-.3526746-.3526746-.3939974-.89699-.11546894-1.2893215z\" fill=\"" + color + "\" fill-rule=\"evenodd\"/></svg>";
        element += ".ios i.icon.icon-back {background-image: url('data:image/svg+xml;utf8," + svgCode + "')!important}";
    } catch(err) {}

    element += "body, h1, h2, h3, h4, h5, h6, text.card-footer-inner-text, div.card-footer-inner-text {" + sanLite(OpenSkin_jsonContents.styles[0].label) + "}";
    element += ".button.color-red, .active {" + sanLite(OpenSkin_jsonContents.styles[0].button) + "}";
    element += ".modal {" + sanLite(OpenSkin_jsonContents.styles[0].alert) + "}";
    element += ".page-content, .card, #games-list>.row {" + sanLite(OpenSkin_jsonContents.styles[0].containerBackground) + "}";
    element += ".item-content, .inset>ul>div>div>a>.card, .swiper-slide, .list, .inset, .block-strong, .inset>ul, .list.inset>ul>div.row, .div.block.inset {" + sanLite(OpenSkin_jsonContents.styles[0].cell) + "}";
    element += ".item-after {" + sanLite(OpenSkin_jsonContents.styles[0].cellChevron) + "}";
    element += ".toolbar {" + sanLite(OpenSkin_jsonContents.styles[0].toolbar) + "}";
    element += ".block-title {" + sanLite(OpenSkin_jsonContents.styles[0].cellGroupTitle) + "}";
    // iGBA methods are officially in the OpenSkin spec.
    element += "#emulatorPopup, .popup-emu, .emulator-view {" + sanLite(OpenSkin_jsonContents.styles[0].emulatorBackground) + ";" + "}";
    element += "#emulatorTarget {" + sanLite(OpenSkin_jsonContents.styles[0].emulatorScreen) + ";" + "}";
    element += "#emu_l_btn, .button-l {" + sanLite(OpenSkin_jsonContents.styles[0].triggerL) + "}";
    element += "#emu_r_btn, .button-r {" + sanLite(OpenSkin_jsonContents.styles[0].triggerR) + "}";
    element += "#emu_center#emu_center, .arrow-button-centerr {" + sanLite(OpenSkin_jsonContents.styles[0].center) + "}";
    element += "#emu_right_btn#emu_right_btn, .arrow-button-right {" + sanLite(OpenSkin_jsonContents.styles[0].right) + "}";
    element += "#emu_left_btn#emu_left_btn, .arrow-button-left {" + sanLite(OpenSkin_jsonContents.styles[0].left) + "}";
    element += "#emu_up_btn#emu_up_btn, .arrow-button-up {" + sanLite(OpenSkin_jsonContents.styles[0].up) + "}";
    element += "#emu_down_btn#emu_down_btn, .arrow-button-down {" + sanLite(OpenSkin_jsonContents.styles[0].down) + "}";
    element += "#emu_a_btn, .button-a {" + sanLite(OpenSkin_jsonContents.styles[0].aBtn) + "}";
    element += "#emu_b_btn, .button-b {" + sanLite(OpenSkin_jsonContents.styles[0].bBtn) + "}";
    element += "#emu_x_btn, .button-x {" + sanLite(OpenSkin_jsonContents.styles[0].xBtn) + "}";
    element += "#emu_y_btn, .button-y {" + sanLite(OpenSkin_jsonContents.styles[0].yBtn) + "}";
    element += "#emu_start_btn, .menu-button-start {" + sanLite(OpenSkin_jsonContents.styles[0].startBtn) + "}";
    element += "#emu_select_btn, .menu-button-select {" + sanLite(OpenSkin_jsonContents.styles[0].select) + "}";
    element += ".searchbar-input-wrap>input {" + sanLite(OpenSkin_jsonContents.styles[0].searchbar) + "}";
    element += ".ios .list .item-divider:after,.ios .list .item-inner:after,.ios .list .list-button:after,.ios .list .list-group-title:after,.ios .list ul:after,.ios .list ul:before,.ios .list:after,.ios .list:before,.ios .navbar:after,.ios .searchbar:after,.ios .subnavbar:after,.ios .toolbar:before {" + sanLite(OpenSkin_jsonContents.styles[0].hairlines) + "}";
    element += ".list .item-footer {" + sanLite(OpenSkin_jsonContents.styles[0].caption) + "}";
    element += ".item-media .icon {" + sanLite(OpenSkin_jsonContents.styles[0].icon) + "}";
    // Out-of-spec: gradients
    element += ".gradient, .inset.eclipse-header, .eclipse-header {" + sanLite(OpenSkin_jsonContents.styles[0].gradient) + "}";

    if(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName]) {
      element += ".subnavbar, .navbar, .navbar-inner, .searchbar, .ios .navbar .title, .statusbar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].header) + ";" + "}";
      element += ".md .navbar-inner, .md .statusbar, .md {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].mdHeader) + ";" + "}";
      element += ".md .tabBar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].navbar) + ";" + "}";
      element += ".ios .icon:not(.fab-ico):not(.ico-colored-bkg), .ico-white-bkg  {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOSicon) + ";" + "}";
      element += ".md .icon:not(.fab-ico):not(.ico-white-bkg):not(.color-black):not(.actions-button-media>i), .ico-colored-bkg   {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDicon) + ";" + "}";

      element += ".md .tab-link:not(.tab-link-active) :not(.fab-ico), .md .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDoutOfFocus) + ";" + "}";
      element += ".ios .tab-link:not(.tab-link-active) :not(.fab-ico), .ios .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOSoutOfFocus) + ";" + "}";
      element += ".md .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDinFocus) + ";" + "}";
      element += ".ios .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOSinFocus) + ";" + "}";
      element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDtoggleHead) + ";" + "}";
      element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDtoggleBody) + ";" + "}";
      element += ".ios .toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOStoggleHead) + ";" + "}";
      element += ".ios .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOStoggleBody) + ";" + "}";
      element += ".fabCircle {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].fab) + ";" + "}";
      element += ".tint, .ios .color-theme-red a, .ios a, .back > span, .back > div, .ios .searchbar-disable-button, .ios .color-theme-red .searchbar-disable-button {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].tint) + ";" + "}";
      try { // Back arrow: create svg to go with given color value. Potentially unstable.
         color = sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].tint).replace("!important","").replace(" ","");
         color = /color:?(.*)(;|$)?/g.exec(color)[1].replace(";","");
         svgCode = "<svg width=\"12\" height=\"20\" viewBox=\"0 0 12 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M.18261596 9.4221638c.0352203-.05148305.07573462-.10050698.1215468-.14631917L9.1425872.4374202c.5830904-.58309038 1.52656832-.5849888 2.11643872.00488163.5857864.58578644.591222 1.53009836.0048816 2.11643873L3.82594417 9.9967039l7.43188553 7.4318855c.5830904.5830904.5849888 1.5265683-.0048817 2.1164387-.5857864.5857865-1.5300983.591222-2.11643868.0048816L.2980849 10.7114853c-.3526746-.3526746-.3939974-.89699-.11546894-1.2893215z\" fill=\"" + color + "\" fill-rule=\"evenodd\"/></svg>";
         element += ".ios i.icon.icon-back {background-image: url('data:image/svg+xml;utf8," + svgCode + "')!important}";
      } catch(err) {}

      element += "body, h1, h2, h3, h4, h5, h6, text.card-footer-inner-text, div.card-footer-inner-text {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].label) + "}";
      element += ".button.color-red, .active {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].button) + "}";
      element += ".modal {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].alert) + "}";
      element += ".page-content, .card, #games-list>.row {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].containerBackground) + "}";
      element += ".item-content, .inset>ul>div>div>a>.card, .swiper-slide, .list, .inset, .block-strong, .inset>ul, .list.inset>ul>div.row, .div.block.inset {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cell) + "}";
      element += ".item-after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cellChevron) + "}";
      element += ".toolbar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].toolbar) + "}";
      element += ".block-title {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cellGroupTitle) + "}";
      // iGBA methods are officially in the OpenSkin spec.
      element += "#emulatorPopup, .popup {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].emulatorBackground) + ";" + "}";
      element += "#emulator_target {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].emulatorScreen) + ";" + "}";
      element += "#emu_l_btn, .button-l {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].triggerL) + "}";
      element += "#emu_r_btn, .button-r {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].triggerR) + "}";
      element += "#emu_center#emu_center, .arrow-button-centerr {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].center) + "}";
      element += "#emu_right_btn#emu_right_btn, .arrow-button-right {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].right) + "}";
      element += "#emu_left_btn#emu_left_btn, .arrow-button-left {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].left) + "}";
      element += "#emu_up_btn#emu_up_btn, .arrow-button-up {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].up) + "}";
      element += "#emu_down_btn#emu_down_btn, .arrow-button-down {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].down) + "}";
      element += "#emu_a_btn, .button-a {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].aBtn) + "}";
      element += "#emu_b_btn, .button-b {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].bBtn) + "}";
      element += "#emu_x_btn, .button-x {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].xBtn) + "}";
      element += "#emu_y_btn, .button-y {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].yBtn) + "}";
      element += "#emu_start_btn, .menu-button-start {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].startBtn) + "}";
      element += "#emu_select_btn, .menu-button-select {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].select) + "}";
      element += ".searchbar-input-wrap>input {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].searchbar) + "}";
      element += ".ios .list .item-divider:after,.ios .list .item-inner:after,.ios .list .list-button:after,.ios .list .list-group-title:after,.ios .list ul:after,.ios .list ul:before,.ios .list:after,.ios .list:before,.ios .navbar:after,.ios .searchbar:after,.ios .subnavbar:after,.ios .toolbar:before {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].hairlines) + "}";
      element += ".list .item-footer {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].caption) + "}";
      element += ".item-media .icon {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].icon) + "}";

      // Out-of-spec: gradients
      element += ".gradient, .inset.eclipse-header, .eclipse-header {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].gradient) + "}";
    }

    if (localStorage.getItem('desktopMode') == 'true') {
      // If desktopMode is enabled, hide game controls.
      element += " @media screen and (orientation:portrait) { #desktopModeEnabledNotice {display:block!important;color:white;opacity:0.5;position:fixed;width:100%;text-align:center;top:420px;font-size:24px} #desktopModeEnabledNoticeL2 {display:block!important;color:white;opacity:0.5;position:fixed;width:100%;text-align:center;top:450px;font-size:18px} } #emu_l_btn, .button-l , #emu_r_btn, .button-r , #emu_center#emu_center, .arrow-button-centerr , #emu_right_btn#emu_right_btn, .arrow-button-right , #emu_left_btn#emu_left_btn, .arrow-button-left , #emu_up_btn#emu_up_btn, .arrow-button-up , #emu_down_btn#emu_down_btn, .arrow-button-down , #emu_a_btn, .button-a , #emu_b_btn, .button-b , #emu_start_btn, .menu-button-start , #emu_select_btn, .menu-button-select {display:none!important;opacity:0!important;visibility:hidden!important}";
    }

    // Skin viewer update
    try {
      eclipse.methods.skins.updateSkinLabel();
    } catch(err) {}

    // Custom CSS
    try {
      element += sanCustom(OpenSkin_jsonContents.styles[0].custom[0][OpenSkin_jsonAppName])
    } catch(n) {}

    if(document.getElementById("openskin_stylesheet")) {
      document.getElementById("openskin_stylesheet").innerHTML = element;
    } else {
      var style = document.createElement("style");
      style.id = "openskin_stylesheet";
      style.innerHTML = element;
      document.head.appendChild(style);
    }

    return true
  }
  this.skin = function(url) {
      return OpenSkin_jsonContents;
  }
}

var OpenSkin = new OpenSkin();
