function toggleTerms() {
    const termsBox = document.getElementById('termsOverlay');
    const checkbox = document.getElementById('invalidCheck');

    if (checkbox.checked) {
        termsBox.style.opacity = '1'; // Show the overlay with smooth transition
        termsBox.style.pointerEvents = 'auto'; // Make it interactable
    } else {
        termsBox.style.opacity = '0'; // Hide the overlay with smooth transition
        termsBox.style.pointerEvents = 'none'; // Make it non-interactable
    }
}

function hideTermsOverlay() {
    const termsBox = document.getElementById('termsOverlay');
    termsBox.style.opacity = '0'; // Hide the overlay with smooth transition
    termsBox.style.pointerEvents = 'none'; // Make it non-interactable
}