const boxInfo = Array.from(document.querySelectorAll('.course-box-info'))
const externalLinkTemplate = '<i class="fa fa-external-link box-icon" aria-hidden="true"></i>'
boxInfo.forEach((box) => box.insertAdjacentHTML('afterbegin', externalLinkTemplate))
