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
      <a href="page/homepage">English</a>
    </details>
  `)
}


//sj scripts
$('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a></div>');
$('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</div>');
