﻿(function () {
    $(document).ready(function () {
        $('.app-version').text(chrome.runtime.getManifest().version);
    })
})();