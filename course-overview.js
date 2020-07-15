Array.from(document.querySelectorAll('section'))
  .forEach((section) => section.classList.add('active'))

// const summary = document.querySelector('.sj-summary')
// if (summary) {
//   summary.insertAdjacentHTML(
//     'beforebegin',
//     '<img src="https://etienneburdet.com/ods-academy/empty-datasets_yellow.svg" class="course-image">'
//   )
// }

//SJ autosubscription
$(document).ready(function () {
    var refGuides = document.querySelectorAll('#skilljar-content #catalog-content #catalog-courses a[data-tags*="auto-register"]')
    refGuides.forEach(function (node) {
        var href = node.href;
        if (!~href.indexOf('?reg=1')) {
            node.href = href + '?reg=1';
        }
    })
})
