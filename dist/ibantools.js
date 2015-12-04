/*!
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";define(["require","exports"],function(a,e){function n(a){if(void 0!==a&&null!==a){var e=s(a),n=h[e.slice(0,2)];if(void 0!==n&&n.chars===e.length&&c(e.slice(4),n.bban_regexp)&&1===g(e))return!0}return!1}function r(a){var e=s(a.bban),n=h[a.countryCode];if(void 0!==n&&n.chars===e.length+4&&c(e,n.bban_regexp)){var r=g(a.countryCode+"00"+e);return a.countryCode+("0"+(98-r)).slice(-2)+e}return null}function b(a){var e={};if(a=s(a),n(a)){e.bban=a.slice(4),e.countryCode=a.slice(0,2);var r=h[e.countryCode];e.countryName=r.name,e.valid=!0}else e.valid=!1;return e}function c(a,e){var n=new RegExp(e,"");return n.test(a)}function s(a){return a.replace(/[^a-zA-Z0-9]/g,"").toUpperCase()}function i(a,e){return"undefined"==typeof e&&(e=" "),s(a).replace(/(.{4})(?!$)/g,"$1"+e)}function g(a){a=a.slice(3)+a.slice(0,4);for(var e="",n=1;n<a.length;n++){var r=a.charCodeAt(n);e+=r>=65?(r-55).toString():a[n]}for(;e.length>2;){var b=e.slice(0,6);e=(parseInt(b,10)%97).toString()+e.slice(b.length)}return parseInt(e,10)%97}function p(){return h}var h={};e.isValidIBAN=n,e.composeIBAN=r,e.extractIBAN=b,e.electonicFormatIBAN=s,e.friendlyFormatIBAN=i,e.getCountrySpecs=p,h.AL={chars:28,bban_regexp:"^[0-9]{8}[A-Z0-9]{16}$",name:"Albania"},h.AD={chars:24,bban_regexp:"^[0-9]{8}[A-Z0-9]{12}$",name:"Andorra"},h.AT={chars:20,bban_regexp:"^[0-9]{16}$",name:"Austria"},h.AZ={chars:28,bban_regexp:"^[A-Z0-9]{4}[0-9]{20}$",name:"Azerbaijan"},h.BH={chars:22,bban_regexp:"^[A-Z]{4}[A-Z0-9]{14}$",name:"Bahrain"},h.BE={chars:16,bban_regexp:"^[0-9]{12}$",name:"Belgium"},h.BA={chars:20,bban_regexp:"^[0-9]{16}$",name:"Bosnia and Herzegovina"},h.BR={chars:29,bban_regexp:"^[0-9]{23}[A-Z]{1}[A-Z0-9]{1}$",name:"Brazil"},h.BG={chars:22,bban_regexp:"^[A-Z]{4}[0-9]{6}[A-Z0-9]{8}$",name:"Bulgaria"},h.CR={chars:21,bban_regexp:"^[0-9]{17}$",name:"Costa Rica"},h.HR={chars:21,bban_regexp:"^[0-9]{17}$",name:"Croatia"},h.CY={chars:28,bban_regexp:"^[0-9]{8}[A-Z0-9]{16}$",name:"Cyprus"},h.CZ={chars:24,bban_regexp:"^[0-9]{20}$",name:"Czech Republic"},h.DK={chars:18,bban_regexp:"^[0-9]{14}$",name:"Denmark"},h.DO={chars:28,bban_regexp:"^[A-Z]{4}[0-9]{20}$",name:"Dominican Republic"},h.TL={chars:23,bban_regexp:"^[0-9]{19}$",name:"East Timor"},h.EE={chars:20,bban_regexp:"^[0-9]{16}$",name:"Estonia"},h.FO={chars:18,bban_regexp:"^[0-9]{14}$",name:"Faroe Islands"},h.FI={chars:18,bban_regexp:"^[0-9]{14}$",name:"Finland"},h.FR={chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",name:"France"},h.GE={chars:22,bban_regexp:"^[A-Z0-9]{2}[0-9]{16}$",name:"Georgia (country)"},h.DE={chars:22,bban_regexp:"^[0-9]{18}$",name:"Germany"},h.GI={chars:23,bban_regexp:"^[A-Z]{4}[A-Z0-9]{15}$",name:"Gibraltar"},h.GR={chars:27,bban_regexp:"^[0-9]{7}[A-Z0-9]{16}$",name:"Greece"},h.GL={chars:18,bban_regexp:"^[0-9]{14}$",name:"Greenland"},h.GT={chars:28,bban_regexp:"^[A-Z0-9]{4}[A-Z0-9]{20}$",name:"Guatemala"},h.HU={chars:28,bban_regexp:"^[0-9]{24}$",name:"Hungary"},h.IS={chars:26,bban_regexp:"^[0-9]{22}$",name:"Iceland"},h.IE={chars:22,bban_regexp:"^[A-Z0-9]{4}[0-9]{14}$",name:"Republic of Ireland"},h.IL={chars:23,bban_regexp:"^[0-9]{19}$",name:"Israel"},h.IT={chars:27,bban_regexp:"^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$",name:"Italy"},h.JO={chars:30,bban_regexp:"^[A-Z]{4}[0-9]{22}$",name:"Jordan"},h.KZ={chars:20,bban_regexp:"^[0-9]{3}[A-Z0-9]{13}$",name:"Kazakhstan"},h.XK={chars:20,bban_regexp:"^[0-9]{4}[0-9]{10}[0-9]{2}$",name:"Kosovo"},h.KW={chars:30,bban_regexp:"^[A-Z]{4}[A-Z0-9]{22}$",name:"Kuwait"},h.LV={chars:21,bban_regexp:"^[A-Z]{4}[A-Z0-9]{13}$",name:"Latvia"},h.LB={chars:28,bban_regexp:"^[0-9]{4}[A-Z0-9]{20}$",name:"Lebanon"},h.LI={chars:21,bban_regexp:"^[0-9]{5}[A-Z0-9]{12}$",name:"Liechtenstein"},h.LT={chars:20,bban_regexp:"^[0-9]{16}$",name:"Lithuania"},h.LU={chars:20,bban_regexp:"^[0-9]{3}[A-Z0-9]{13}$",name:"Luxembourg"},h.MK={chars:19,bban_regexp:"^[0-9]{3}[A-Z0-9]{10}[0-9]{2}$",name:"Republic of Macedonia"},h.MT={chars:31,bban_regexp:"^[A-Z]{4}[0-9]{5}[A-Z0-9]{18}$",name:"Malta"},h.MR={chars:27,bban_regexp:"^[0-9]{23}$",name:"Mauritania"},h.MU={chars:30,bban_regexp:"^[A-Z]{4}[0-9]{19}[A-Z]{3}$",name:"Mauritius"},h.MC={chars:27,bban_regexp:"^[0-9]{10}[A-Z0-9]{11}[0-9]{2}$",name:"Monaco"},h.MD={chars:24,bban_regexp:"^[A-Z0-9]{2}[A-Z0-9]{18}$",name:"Moldova"},h.ME={chars:22,bban_regexp:"^[0-9]{18}$",name:"Montenegro"},h.NL={chars:18,bban_regexp:"^[A-Z]{4}[0-9]{10}$",name:"Netherlands"},h.NO={chars:15,bban_regexp:"^[0-9]{11}$",name:"Norway"},h.PK={chars:24,bban_regexp:"^[A-Z0-9]{4}[0-9]{16}$",name:"Pakistan"},h.PS={chars:29,bban_regexp:"^[A-Z0-9]{4}[0-9]{21}$",name:"Palestinian territories"},h.PL={chars:28,bban_regexp:"^[0-9]{24}$",name:"Poland"},h.PT={chars:25,bban_regexp:"^[0-9]{21}$",name:"Portugal"},h.QA={chars:29,bban_regexp:"^[A-Z]{4}[A-Z0-9]{21}$",name:"Qatar"},h.RO={chars:24,bban_regexp:"^[A-Z]{4}[A-Z0-9]{16}$",name:"Romania"},h.SM={chars:27,bban_regexp:"^[A-Z]{1}[0-9]{10}[A-Z0-9]{12}$",name:"San Marino"},h.SA={chars:24,bban_regexp:"^[0-9]{2}[A-Z0-9]{18}$",name:"Saudi Arabia"},h.RS={chars:22,bban_regexp:"^[0-9]{18}$",name:"Serbia"},h.SK={chars:24,bban_regexp:"^[0-9]{20}$",name:"Slovakia"},h.SI={chars:19,bban_regexp:"^[0-9]{15}$",name:"Slovenia"},h.ES={chars:24,bban_regexp:"^[0-9]{20}$",name:"Spain"},h.SE={chars:24,bban_regexp:"^[0-9]{20}$",name:"Sweden"},h.CH={chars:21,bban_regexp:"^[0-9]{5}[A-Z0-9]{12}$",name:"Switzerland"},h.TN={chars:24,bban_regexp:"^[0-9]{20}$",name:"Tunisia"},h.TR={chars:26,bban_regexp:"^[0-9]{5}[A-Z0-9]{17}$",name:"Turkey"},h.AE={chars:23,bban_regexp:"^[0-9]{3}[0-9]{16}$",name:"United Arab Emirates"},h.GB={chars:22,bban_regexp:"^[A-Z]{4}[0-9]{14}$",name:"United Kingdom"},h.VG={chars:24,bban_regexp:"^[A-Z0-9]{4}[0-9]{16}$",name:"British Virgin Islands"}});