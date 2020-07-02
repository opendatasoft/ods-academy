const headerLeft =   document.getElementById('header-left')
const headerRight = document.getElementById('header-right')

let selectedLang = 'fr'

if (selectedLang === 'fr') {
  headerLeft.insertAdjacentHTML('beforeend',`
    <a href="page/catalogue-cours" class="header-link">Tous les cours</a>
    <a href="page/parcours-thematiques" class="header-link">Parcours thématiques</a>
    <a href="page/bibliothque-des-savoirs" class="header-link">page/bibliothque-des-savoirs</a>
  `)
  headerRight.insertAdjacentHTML('beforeend',`
    <a href="page/hompage" class="header-lang button">Français</a>
  `)
}


//sj scripts
$('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a></div>');
$('#ep-footer').append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</div>');
