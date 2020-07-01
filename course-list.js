document.getElementById('skilljar-content').classList.remove('grey-bg-d05')

Array.from(document.querySelectorAll('fa-carret-down'))
  .forEach((item) => {
    item.classList.remove('fa-carret-down')
    item.classList.add('fa-angle-down')
  })

if (!document.getElementById('catalog-filter-menu')) {
  document.getElementById('catalog-left-nav').classList.add('d-none')
  document.getElementById('skilljar-content').classList.add('m-none')
}
