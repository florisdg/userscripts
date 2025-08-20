// ==UserScript==
// @name         Redirect Kagi Maps to Google Maps
// @namespace    http://tampermonkey.net/
// @version      2025-08-20
// @description  Redirects Kagi Maps to Google Maps, preserving query if present
// @author       https://github.com/florisdg
// @match        https://kagi.com/maps*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kagi.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const url = new URL(window.location.href);
    const query = url.searchParams.get("q");

    if (query) {
        // Redirect to Google Maps search with query
        window.location.replace("https://www.google.com/maps/search/" + encodeURIComponent(query));
    } else {
        // Redirect to Google Maps homepage
        window.location.replace("https://www.google.com/maps");
    }
})();
