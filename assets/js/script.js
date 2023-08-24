// Start enter image animation, when website is fully loaded
window.addEventListener('load', function () {
    // After the page is fully loaded, make the body visible
    document.body.classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById("languageButton");
    const languageMenu = document.getElementById("languageMenu");
    
    // Initialize button based on URL
    const path = window.location.pathname;
    const page = path.split("/").pop();
    let currentLang = "Language"; // Default

    switch(page) {
        case "index-en.html":
            currentLang = "English";
            break;
        case "index-pl.html":
            currentLang = "Polski";
            break;
        case "index-sv.html":
            currentLang = "Svenska";
            break;
        default:
            // This can be your default language for the index.html file
            currentLang = "English";
            break;
    }
    
    languageButton.innerHTML = currentLang + ' <span class="caret"></span>';
    
    // Update button when menu item is clicked
    languageMenu.addEventListener("click", function (event) {
        var target = event.target;

        if (target.tagName === 'A') {
            const selectedLanguage = target.getAttribute("data-language");
            languageButton.innerHTML = selectedLanguage + ' <span class="caret"></span>';
        }
    });
});
