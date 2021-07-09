(function() {
  const headerLeft = document.getElementById("header-left")
  const headerRight = document.getElementById("header-right")
  const langButton = document.querySelector(".header-lang")
  const footerLeft = document.getElementById("footer-left")
  const logoLink = document.querySelector(".header-logo-link")

  const headerLinks = {
    fr: [
      {
        name: "Parcours utilisateurs",
        url: "https://academy.opendatasoft.com/page/parcours-fr"
      },
      {
        name: "Tous les cours",
        url: "https://academy.opendatasoft.com/page/catalogue-cours"
      },
      {
        name: "Sources d'inspiration",
        url: "https://academy.opendatasoft.com/page/sources-inspiration"
      },
      {
        name: "Bibliothèque des savoirs",
        url: "https://academy.opendatasoft.com/page/bibliotheque-des-savoirs"
      }
    ],
    en: [
      {
        name: "Learning paths",
        url: "https://academy.opendatasoft.com/page/learning-paths"
      },
      {
        name: "All courses",
        url: "https://academy.opendatasoft.com/page/all-courses"
      },
      {
        name: "Sources of inspiration",
        url: "https://academy.opendatasoft.com/page/sources-of-inspiration"
      },
      {
        name: "Knowledge library",
        url: "https://academy.opendatasoft.com/page/knowledge-library"
      }
    ]
  }

  const insertHeaderLinks = (lang) => {
    headerLinks[lang].forEach(link =>
      headerLeft.insertAdjacentHTML(
        "beforeend",
        `<a href="${link.url}" class="header-link">${link.name}</a>`
      )
    )

    headerRight.insertAdjacentHTML(
      "afterbegin",
      `
      <a class="header-link" href="https://help.opendatasoft.com/${lang}/home">Help Hub</a>
    `
    )
  }

  const insertFooterLinks = (lang) => {
    footerLeft &&
      footerLeft.insertAdjacentHTML(
        "beforeend",
        /*html*/ `
      <a class="footer-content" href="https://legal.opendatasoft.com/${lang}/privacy-policy.html" target="_blank">
        ${lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
      </a>
      <a class="footer-content" href="https://legal.opendatasoft.com/${lang}/cookies.html" target="_blank">Cookies</a>
      <a href="mailto:academy@opendatasoft.com">Contact</a>
    `
      )
  }

  const insertLangButton = (lang) => {
    headerRight.insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <div>
        <details class="header-lang-btn">
          <summary>${lang.toUpperCase()}</summary>
          <span id="lang-choice">${lang === "fr" ? "EN" : "FR"}</span>
        </details>
      <div>
    `
    )
  }

  const replaceLogoLink = (lang) => {
    if (lang === "en") {
      logoLink.href = "https://academy.opendatasoft.com/page/homepage"
    }
  }

  const renderLinks = (lang) => {
    insertLangButton(lang);
    insertFooterLinks(lang);
    insertHeaderLinks(lang);
    replaceLogoLink(lang);
  }

  const toggleLang = () => {
    const lang = sessionStorage.getItem("lang")
    if (lang === "fr") {
      sessionStorage.setItem("lang", "en")
      window.location.href = "https://academy.opendatasoft.com/page/homepage"
    } else {
      sessionStorage.setItem("lang", "fr")
      window.location.href = "https://academy.opendatasoft.com/"
    }
  }


  if (
    window.location.toString() ===
    "https://academy.opendatasoft.com/page/homepage"
  ) {
    sessionStorage.setItem("lang", "en")
  } else if (
    window.location.toString() === "https://academy.opendatasoft.com/"
  ) {
    sessionStorage.setItem("lang", "fr")
  } else if (!sessionStorage.getItem("lang")) {
    navigator.language.match(/(fr)/)
      ? sessionStorage.setItem("lang", "fr")
      : sessionStorage.setItem("lang", "en")
  }

  renderLinks(sessionStorage.getItem("lang"))
  const langChoice = document.getElementById("lang-choice")
  langChoice.addEventListener("click", toggleLang)
})();
