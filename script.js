document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo'); // Select the logo element

    function toggleLogoVisibility() {
        // This function checks the current URL hash and hides/shows the logo accordingly
        // Correctly escape the '.' in the ID
        let hash = window.location.hash.replace('.', '\\.');
        if (window.location.hash && document.querySelector(hash + '.page')) {
            // Hide the logo if the hash matches an element with class 'page'
            logo.classList.add('hidden');
        } else {
            // Show the logo if no relevant hash is found or it does not match a 'page'
            logo.classList.remove('hidden');
        }
    }

    // Listen for changes in the hash part of the URL
    window.addEventListener('hashchange', toggleLogoVisibility);

    // Check the initial state when the page is loaded
    toggleLogoVisibility();
});



// Function to check if the URL ends with a #
function getLastSegmentExtension(url) {
  var parts = url.split('/');
  var lastSegment = parts.pop() || parts.pop();  // Handles potential trailing slash
  var extension = lastSegment.split('.').pop();
  return extension;
}

function checkUrlEndsWithHash() {
  var fullUrl = window.location.href;
  var extension = getLastSegmentExtension(fullUrl);


  if (fullUrl.endsWith('about')) {
    document.getElementById("about-nav").style.display = "none";
  }

  if (fullUrl.endsWith('/') || extension === 'html') {
    document.getElementById("Fixes").style.display = "block";
  } else {
    document.getElementById("Fixes").style.display = "none";
  }
}

window.addEventListener('hashchange', checkUrlEndsWithHash);

var observer = new MutationObserver(checkUrlEndsWithHash);

var config = { childList: true, subtree: true };

var targetNode = document.body;

observer.observe(targetNode, config);
window.addEventListener('hashchange', checkUrlEndsWithHash);
checkUrlEndsWithHash(); // Ensure this function exists and is correctly defined


