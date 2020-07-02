const headerLeft =   document.getElementById('header-left')
const headerRight = document.getElementById('header-right')
const langButton = document.querySelector('.header-lang')

const toggleChoice = () => {
  langButton.classList.toggle('current-lang')
  langButton.classList.toggle('choice')
}

let lang = 'fr'

if (lang === 'fr') {
  headerLeft.insertAdjacentHTML('beforeend',`
    <a href="page/catalogue-cours" class="header-link">Tous les cours</a>
    <a href="page/parcours-thematiques" class="header-link">Parcours thématiques</a>
    <a href="page/bibliothque-des-savoirs" class="header-link">Bibliothèque des savoirs</a>
  `)
  headerRight.insertAdjacentHTML('beforeend',`
    <details class="header-lang button">
      <summary>Français</summary>
      <p id="lang-choice">English</p>
    </details>
  `)

  document.getElementById('lang-choice')
    .addEventListener('click', ev => {
      lang = 'en'
      window.location.href = '/page/homepage'
    })
} else {
  headerLeft.insertAdjacentHTML('beforeend',`
    <a href="page/all-courses" class="header-link">All courses</a>
    <a href="page/thematic-courses" class="header-link">Thematic courses</a>
    <a href="page/knowledge-library" class="header-link">Knowledge library</a>
  `)
  headerRight.insertAdjacentHTML('beforeend',`
    <details class="header-lang button">
      <summary>English</summary>
      <p id="lang-choice">Français</p>
    </details>
  `)

  document.getElementById('lang-choice')
    .addEventListener('click', ev => {
      lang = 'fr'
      window.location.href = '/'
    })
}


//sj scripts
$('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a></div>');
$('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</div>');
