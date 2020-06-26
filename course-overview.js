Array.from(document.querySelectorAll('section'))
  .forEach((section) => section.classList.add('active'))

document.querySelector('.sj-summary')
  .insertAdjacentHTML(
    'beforebegin',
    '<img src="https://etienneburdet.com/ods-academy/empty-datasets_yellow.svg" class="course-image">'
  )
