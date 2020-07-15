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

  const homepageContent = document.querySelector('.sj-page-catalog-root #skilljar-content')
  homepageContent && homepageContent.insertAdjacentHTML('beforeend',/*html*/`
    <div class="bg-darkblue">
      <div class="hero">
        <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/rocket.png" width="320px" height="171px" alt="une image" />
        <div class="first-steps-descrpition">
          <h1>Vos premiers pas sur ODS</h1>
          <p>Familiarisez-vous avec la plateforme et ses fonctionnalités avec ce premier parcours de découverte.</p>
          <a href="https://opendatasoft.skilljar.com/page/vos-premiers-pas-sur-opendatasoft" class="hero-link">Accéder au parcours</a>
        </div>
      </div>
    </div>

    <div id="why-academy" class="hero">
      <h1>Pourquoi apprendre avec <strong>ODS Academy</strong> ?</h1>
      <div id="why-cards">
        <div class="why-card">
          <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/meter.svg" alt="compteur">
          <h3>Gagnez en autonomie sur ODS</h3>
          <p>Apprenez à réaliser des opérations de plus en plus avancées sur la plateforme. Suivez les cours à votre rythme, testez vos connaissances grâce à des quizzes et des exercices, et formez à votre tour vos collègues et vos partenaires.</p>
        </div>
        <div class="why-card">
          <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/pen.svg" alt="compteur">
          <h3>Composez votre menu pédagogique</h3>
          <p>Parcours interactif, cours rapide ou tutoriel express, trouvez le contenu adapté à vos objectifs, à votre niveau et au temps que vous avez devant vous. Commencez une leçon et revenez-y quand vous le souhaitez, sans perdre votre progression.</p>
        </div>
        <div class="why-card">
          <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/hands.svg" alt="compteur">
          <h3>Valorisez vos savoirs et savoir-faire</h3>
          <p>Combinez votre maîtrise d’ODS avec une solide connaissance du cycle de vie des données. Servez-vous de vos compétences pour faire grandir les projets numériques dans votre organisation, et booster vos opportunités de carrière.</p>
        </div>
      </div>
    </div>

    <div class="bg-purple">
      <div class="hero">
        <div>
          <p>Opendatasoft est enregistré comme organisme de formation.</p>
          <h1>Nos formations sont reconnues. Vos compétences aussi.</h1>
        </div>
      </div>
    </div>
  `)
}

// const = document.querySelector('[title="Tous les cours"]')
// allCourses && allCourses.remove()
