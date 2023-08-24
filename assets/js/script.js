// Start enter image animation, when website is fully loaded

window.addEventListener('load', function () {
    // After the page is fully loaded, make the body visible
    document.body.classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById("languageButton");
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    
    // Set the button label to the current language
    switch(lang) {
      case 'en':
        languageButton.textContent = 'English';
        break;
      case 'pl':
        languageButton.textContent = 'Polski';
        break;
      case 'sv':
        languageButton.textContent = 'Svenska';
        break;
      default:
        languageButton.textContent = 'Language';
    }
  });