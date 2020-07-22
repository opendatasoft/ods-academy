$(document).ready(function () {
  var refGuides = document.querySelectorAll('#skilljar-content #catalog-content #catalog-courses a[data-tags*="auto-register"]')
  refGuides.forEach(function (node) {
    var href = node.href;
    if (!~href.indexOf('?reg=1')) {
      node.href = href + '?reg=1';
    }
  })
})

$(document).ready(function() {
  if ($('.sj-page-curriculum').length && !$('#resume-button').length && $('.lesson-incomplete').length) {
    var firstLesson = $('.lesson-incomplete').first().attr('href');
    var startButton = $('<a class="button margin-top custom-start-btn" title="Begin"><span>Start</span></a>')
      .attr('href', firstLesson)
    $('.cp-summary-wrapper').append($('<div class="custom-btn-container" id="resume-button"/>').append(startButton));
  }
});
