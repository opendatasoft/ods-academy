//removes grey bg
document.getElementById('skilljar-content') && document.getElementById('skilljar-content').classList.remove('grey-bg-d05')

// Catalog pages
$(document).ready(function() {
  Array.from(document.querySelectorAll('.fa-caret-down'))
  .forEach((item) => {
    item.classList.remove('fa-caret-down')
    item.classList.add('fa-angle-down')
  })

  const menu = document.getElementById('catalog-filter-menu')
  const leftNav = document.getElementById('catalog-left-nav')
  const sjContent = document.getElementById('skilljar-content')
  const epFooter = document.querySelector('.catalog-filters #ep-footer')

  if (!menu) {
    leftNav && leftNav.classList.add('d-none')
    sjContent && sjContent.classList.add('m-none')
    epFooter && epFooter.classList.add('m-none')
  }
});

// Course boxes icons
$(document).ready(function() {
  const removeBoxClasses = (element) => {
    const classes = Array.from(element.classList)
    classes.forEach(boxClass => {
      if (boxClass.match(/^course-box.*/)) {
        element.classList.remove(boxClass)
      }
    })
  }

  const addIconToBox = (box, icon) => {
    const boxContent = box.cloneNode(true)
    box.innerHTML = ''
    removeBoxClasses(boxContent)
    box.appendChild(boxContent)

    const iconTemplate = `<i class="fa fa-${icon} box-icon" aria-hidden="true"></i>`
    box.insertAdjacentHTML('afterbegin', iconTemplate)
    box.classList.add('d-flex', 'align-top')
  }


  const boxInfo = Array.from(document.querySelectorAll('.course-box-info'))
  boxInfo && boxInfo.forEach((box) => addIconToBox(box, 'external-link'))

  const boxWarning = Array.from(document.querySelectorAll('.course-box-warning'))
  boxWarning && boxWarning.forEach((box) => addIconToBox(box, 'exclamation-triangle'))

  const boxSuccess = Array.from(document.querySelectorAll('.course-box-success'))
  boxSuccess && boxSuccess.forEach((box) => addIconToBox(box, 'lightbulb-o'))
});

// Learning path: add section titles from tags
$(document).ready(function() {
  const courses = document.querySelectorAll(".coursebox-container")
  const titles = document.querySelectorAll("h2")
  const path = document.location.pathname.split("/path/")[1]

  Array.from(titles).forEach(title => {
    title.insertAdjacentHTML("afterend", `<div class="path-courses-row"><div>`)
  })

  Array.from(courses).forEach(course => {
    if (!course.dataset.tags) { return }
    const tags = course.dataset.tags.split(",")
    const pathTag = tags.find(tag => tag.includes(path))
    const section = pathTag && pathTag.split(path)[1]
    const node = section && [...titles].find(title => title.id === section)
    node && node.nextSibling.insertBefore(course, null)
  })
});

// Course overview, fixes purchase button
$(document).ready(function() {
  Array.from(document.querySelectorAll('section'))
  .forEach((section) => section.classList.add('active'))

  if(document.querySelector('.purchase-button-full-text')){
    document.querySelector('.purchase-button-full-text').innerText = document.querySelector('.purchase-button-full-text').innerText.split(" |")[0]
  }
});

// From Skilljar CSMs
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
    var startButton = $(
      sessionStorage.getItem('lang') === 'fr'
        ? '<a class="button margin-top custom-start-btn" title="Begin"><span>Commencer</span></a>'
        : '<a class="button margin-top custom-start-btn" title="Begin"><span>Start</span></a>')
      .attr('href', firstLesson)
    $('.cp-summary-wrapper').append($('<div class="custom-btn-container" id="resume-button"/>').append(startButton));
  }
});

$(document).ready(function () {
    var refGuides = document.querySelectorAll('#skilljar-content #catalog-content #catalog-courses a[data-tags*="auto-register"]')
    refGuides.forEach(function (node) {
        var href = node.href;
        if (!~href.indexOf('?reg=1')) {
            node.href = href + '?reg=1';
        }
    })
})
