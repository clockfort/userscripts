// ==UserScript==
// @name         Hide VRV Spoiler-filled Descriptions from Video Pages
// @namespace    http://github.com/clockfort/userscripts/vrv/hideSpoilerDescriptions
// @version      0.1
// @description  Show VRV descriptions as greyish shadow text that needs to be selected with the mouse to be read properly
// @author       Chris Lockfort
// @match        https://vrv.co/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

// @run-at       document-start

var css = document.createElement("style")
css.type = "text/css"
css.innerHTML = "#content .description{ opacity: 0; } #content .description:hover { opacity: 0.5; }"
document.head.appendChild(css)
