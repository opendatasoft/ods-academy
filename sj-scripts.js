$(document).ready(function () {
    var refGuides = document.querySelectorAll('#skilljar-content #catalog-content #catalog-courses a[data-tags*="auto-register"]')
    refGuides.forEach(function (node) {
        var href = node.href;
        if (!~href.indexOf('?reg=1')) {
            node.href = href + '?reg=1';
        }
    })
})
