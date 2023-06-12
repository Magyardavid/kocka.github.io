var countryLinks = document.querySelectorAll('.country-link');

countryLinks.forEach(countryLink => {
  countryLink.addEventListener('mouseover', function() {
    const flagFileName = this.getAttribute('data-flag');
    const countryContainer = document.querySelector('.country');
    const imgElement = countryContainer.querySelector('img');
    imgElement.src = flagFileName;
  });
});