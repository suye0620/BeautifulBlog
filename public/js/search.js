"use strict";
var searchVisible = !1;

function toggleSearch(e) {
    e.preventDefault(), searchVisible ? $("#dream-search").css("display", "") : ($("#dream-search").css("display", "block"), setTimeout(function () {
        return $("#dream-search input").focus()
    })), searchVisible = !searchVisible
}
$(document).ready(function () {
    $(document).on("keydown", function (e) {
        e.metaKey && "/" === e.key && !searchVisible && toggleSearch(e), "Escape" === e.key && searchVisible && toggleSearch(e)
    })
});
