document.getElementById("skilljar-content")&&document.getElementById("skilljar-content").classList.remove("grey-bg-d05");Array.from(document.querySelectorAll(".fa-caret-down")).forEach(item=>{item.classList.remove("fa-caret-down");item.classList.add("fa-angle-down")});const menu=document.getElementById("catalog-filter-menu");const leftNav=document.getElementById("catalog-left-nav");const sjContent=document.getElementById("skilljar-content");const epFooter=document.querySelector(".catalog-filters #ep-footer");if(!menu){leftNav&&leftNav.classList.add("d-none");sjContent&&sjContent.classList.add("m-none");epFooter&&epFooter.classList.add("m-none")}document.querySelector('[title="Tous les cours"]').remove();const homepageContent=document.querySelector(".sj-page-catalog-root #skilljar-content");homepageContent&&homepageContent.insertAdjacentHTML("beforeend",`\n  <div class="w-100-bg-purple">\n    <div class="all-courses">\n      <img src="https://lh5.googleusercontent.com/Sx5v7GmHrWC8RY5D5Zr4nMxCtDAngR7Dc8RUT8miJpG1sNJc6MoWNoylTknU5ADYEOBwW2N3Hv44533mSQq9EtGaagAbiWKVhNDlIbTljLLlyyCIXJ7JlUIhBnY6cIOrTH99oGKy4_Y" width="320px" height="171px" alt="une image" />\n      <div class="all-courses-descrpition">\n        <h1>Browse through our full catalog of courses</h1>\n        <p>Filter courses by difficulty, topic and skill to find what you need.</p>\n        <a href="https://opendatasoft.skilljar.com/page/catalogue-cours" class="all-courses-link">Access all courses</a>\n      </div>\n    </div>\n  </div>\n`);const removeBoxClasses=element=>{const classes=Array.from(element.classList);classes.forEach(boxClass=>{if(boxClass.match(/^course-box.*/)){element.classList.remove(boxClass)}})};const addIconToBox=(box,icon)=>{const boxContent=box.cloneNode(true);box.innerHTML="";removeBoxClasses(boxContent);box.appendChild(boxContent);const iconTemplate=`<i class="fa fa-${icon} box-icon" aria-hidden="true"></i>`;box.insertAdjacentHTML("afterbegin",iconTemplate);box.classList.add("d-flex","align-top")};const boxInfo=Array.from(document.querySelectorAll(".course-box-info"));boxInfo&&boxInfo.forEach(box=>addIconToBox(box,"external-link"));const boxWarning=Array.from(document.querySelectorAll(".course-box-warning"));boxWarning&&boxWarning.forEach(box=>addIconToBox(box,"exclamation-triangle"));const boxSuccess=Array.from(document.querySelectorAll(".course-box-success"));boxSuccess&&boxSuccess.forEach(box=>addIconToBox(box,"lightbulb-o"));Array.from(document.querySelectorAll("section")).forEach(section=>section.classList.add("active"));const summary=document.querySelector(".sj-summary");if(summary){summary.insertAdjacentHTML("beforebegin",'<img src="https://etienneburdet.com/ods-academy/empty-datasets_yellow.svg" class="course-image">')}const headerLeft=document.getElementById("header-left");const headerRight=document.getElementById("header-right");const langButton=document.querySelector(".header-lang");const toggleChoice=()=>{langButton.classList.toggle("current-lang");langButton.classList.toggle("choice")};!sessionStorage.getItem("lang")&&sessionStorage.setItem("lang","fr");if(sessionStorage.getItem("lang")==="fr"){headerLeft.insertAdjacentHTML("beforeend",`\n    <a href="/page/catalogue-cours" class="header-link">Tous les cours</a>\n    <a href="/page/parcours-thematiques" class="header-link">Parcours thématiques</a>\n    <a href="/page/bibliotheque-des-savoirs" class="header-link">Bibliothèque des savoirs</a>\n  `);headerRight.insertAdjacentHTML("afterbegin",`\n    <div>\n      <details class="header-lang-btn button">\n        <summary>Français</summary>\n        <span id="lang-choice">English</span>\n      </details>\n    </div>\n  `);document.getElementById("lang-choice").addEventListener("click",ev=>{sessionStorage.setItem("lang","en");window.location.href="/page/homepage"})}else{headerLeft.insertAdjacentHTML("beforeend",`\n    <a href="/page/all-courses" class="header-link">All courses</a>\n    <a href="/page/thematic-courses" class="header-link">Thematic courses</a>\n    <a href="/page/knowledge-library" class="header-link">Knowledge library</a>\n  `);headerRight.insertAdjacentHTML("afterbegin",`\n    <div>\n      <details class="header-lang-btn button">\n        <summary>English</summary>\n        <span id="lang-choice">Français</span>\n      </details>\n    <div>\n  `);document.getElementById("lang-choice").addEventListener("click",ev=>{sessionStorage.setItem("lang","fr");window.location.href="/"})}const footerLeft=document.getElementById("footer-left");footerLeft.insertAdjacentHTML("beforeend",`\n  <a class="footer-content" href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a>\n  <a class="footer-ontent" href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</a>\n`);$(document).ready((function(){var refGuides=document.querySelectorAll('#skilljar-content #catalog-content #catalog-courses a[data-tags*="auto-register"]');refGuides.forEach((function(node){var href=node.href;if(!~href.indexOf("?reg=1")){node.href=href+"?reg=1"}}))}));
