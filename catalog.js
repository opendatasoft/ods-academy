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
  epFooter && epFooter.classList.add('m-none')

  const homepageContent = document.querySelector('.sj-page-catalog #skilljar-content')
  homepageContent && homepageContent.insertAdjacentHTML('beforeend',/*html*/`
    <div class="w-100-bg-purple">
      <div class="all-courses">
        <img src="https://lh5.googleusercontent.com/Sx5v7GmHrWC8RY5D5Zr4nMxCtDAngR7Dc8RUT8miJpG1sNJc6MoWNoylTknU5ADYEOBwW2N3Hv44533mSQq9EtGaagAbiWKVhNDlIbTljLLlyyCIXJ7JlUIhBnY6cIOrTH99oGKy4_Y" width="320px" height="171px" alt="une image" />
        <div class="all-courses-descrpition">
          <h1>Browse through our full catalog of courses</h1>
          <p>Filter courses by difficulty, topic and skill to find what you need.</p>
          <a href="https://opendatasoft.skilljar.com/page/catalogue-cours" class="all-courses-link">Access all courses</a>
        </div>
      </div>
    </div>
  `)
}

const allCourses = document.querySelector('[title="Tous les cours"]')
allCourses && allCourses.remove()
