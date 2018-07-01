// ==UserScript==
// @name         Hide VRV Spoiler-filled Descriptions from Video Pages
// @namespace    http://github.com/clockfort/userscripts/vrv/hideSpoilerDescriptions
// @version      0.1
// @description  Show VRV descriptions as greyish shadow text that needs to be selected with the mouse to be read properly
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
