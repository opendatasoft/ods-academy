const headerLeft =   document.getElementById('header-left')
const headerRight = document.getElementById('header-right')
const langButton = document.querySelector('.header-lang')

const toggleChoice = () => {
  langButton.classList.toggle('current-lang')
  langButton.classList.toggle('choice')
}

!sessionStorage.getItem('lang') && sessionStorage.setItem('lang','fr')

if (sessionStorage.getItem('lang') === 'fr') {
  headerLeft.insertAdjacentHTML('beforeend',`
    <a href="/page/catalogue-cours" class="header-link">Tous les cours</a>
    <a href="/page/parcours-thematiques" class="header-link">Parcours thématiques</a>
    <a href="/page/bibliotheque-des-savoirs" class="header-link">Bibliothèque des savoirs</a>
  `)
  headerRight.insertAdjacentHTML('afterbegin',`
    <div>
      <details class="header-lang-btn button">
        <summary>Français</summary>
        <span id="lang-choice">English</span>
      </details>
    </div>
  `)

  document.getElementById('lang-choice')
    .addEventListener('click', ev => {
      sessionStorage.setItem('lang', 'en')
      window.location.href = '/page/homepage'
    })
} else {
  headerLeft.insertAdjacentHTML('beforeend',`
    <a href="/page/all-courses" class="header-link">All courses</a>
    <a href="/page/thematic-courses" class="header-link">Thematic courses</a>
    <a href="/page/knowledge-library" class="header-link">Knowledge library</a>
  `)
  headerRight.insertAdjacentHTML('afterbegin',`
    <div>
      <details class="header-lang-btn button">
        <summary>English</summary>
        <span id="lang-choice">Français</span>
      </details>
    <div>
  `)

  document.getElementById('lang-choice')
    .addEventListener('click', ev => {
      sessionStorage.setItem('lang', 'fr')
      window.location.href = '/'
    })
}

const footerLeft = document.getElementById('footer-left')
footerLeft.insertAdjacentHTML('beforeend',`
  <a class="footer-content" href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a>
  <a class="footer-ontent" href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</a>
`)

// //sj scripts
// $('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a></div>');
// $('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</div>');
