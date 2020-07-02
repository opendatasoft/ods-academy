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
