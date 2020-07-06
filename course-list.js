document.getElementById('skilljar-content') && document.getElementById('skilljar-content').classList.remove('grey-bg-d05')

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
  epFootr && epFooter.classList.add('m-none')
}
