const removeBoxClasses = (element) => {
  const classes = Array.from(element.classList)
  classes.forEach(boxClass => {
    if (boxClass.match(/^course-box.*/)) {
      element.classList.remove(boxClass)
    }
  })
}

const addIconToBox = (box, icon) => {
  console.log(box)
  const boxContent = box.cloneNode()
  console.log(boxContent)
  removeBoxClasses(boxContent)
  box.appendChild(boxContent)
  const iconTemplate = `<i class="fa fa-${icon} box-icon" aria-hidden="true"></i>`
  box.insertAdjacentHTML('afterbegin', iconTemplate)
  box.classList.add('d-flex', 'align-top')
}

const boxInfo = Array.from(document.querySelectorAll('.course-box-info'))
if (boxInfo) { boxInfo.forEach((box) => addIconToBox(box, 'external-link')) }

const boxWarning = Array.from(document.querySelectorAll('.course-box-warning'))
if (boxWarning) { boxInfo.forEach((box) => addIconToBox(box, 'exclamation-triangle')) }

const boxSuccess = Array.from(document.querySelectorAll('.course-box-success'))
if (boxSuccess) { boxInfo.forEach((box) => addIconToBox(box, 'lightbulb-o')) }
