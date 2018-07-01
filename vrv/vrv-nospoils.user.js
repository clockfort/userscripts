// ==UserScript==
// @name         Hide VRV Spoiler-filled Descriptions from Video Pages
// @namespace    http://github.com/clockfort/userscripts/vrv/hideSpoilerDescriptions
// @version      0.1
// @description  Hides the descriptions from VRV video pages
// @author       Chris Lockfort
// @match        https://vrv.co/watch/*/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';

    var desc_div = document.getElementsByClassName("description")[0];
    if (desc_div) {
        desc_div.parentNode.removeChild(desc_div);
    }
})();
