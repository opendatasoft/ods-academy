(() => {
  let copyText = 'Copy';
  let copiedText = 'Copied!';

  const addCopyButtons = (clipboard) => {
    const divs = document.querySelectorAll('.highlight > pre');
    divs.forEach((containerEl) => {
      containerEl.parentNode.style.position = 'relative';

      const button = document.createElement('button');
      button.className = 'button button-copy is-rounded';
      button.type = 'button';
      button.innerText = copyText;

      var codeBlock = containerEl.querySelector('code');

      button.addEventListener('click', () => {
        clipboard.writeText(codeBlock.innerText).then(() => {
          /* Chrome doesn't seem to blur automatically,
          leaving the button in a focused state. */
          button.blur();

          button.innerText = copiedText;

          setTimeout(() => {
            button.innerText = copyText;
          }, 1000);
        }).catch((error) => {
          button.innerText = 'Error';

          console.error(error);
        });
      });

      containerEl.appendChild(button);
    });
  }

  const initCopyToCB = (event) => {
   if (document.querySelector('.header-lang-btn > summary').innerText == 'FR') {
      copyText = 'Copier';
      copiedText = 'Copié !';
    }

    if (navigator && navigator.clipboard) {
      addCopyButtons(navigator.clipboard);
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/clipboard-polyfill@2.8.6/dist/clipboard-polyfill.min.js';
      script.defer = true;
      script.onload = function() {
        addCopyButtons(clipboard);
      };

      document.head.appendChild(script);
    }
  }

  window.addEventListener("DOMContentLoaded", initCopyToCB, {once: true});
})();
