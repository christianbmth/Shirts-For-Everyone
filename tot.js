const shirts = document.querySelectorAll('figure');

function removeShirt(event) {
  event.target.remove();
}

shirts.forEach((shirt) => {
  shirt.addEventListener('dblclick', removeShirt);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'N' || event.key === 'n') {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = `./tricouri/tricou${randomNum}.jpg`;
    image.alt = "Tricou Nou";
    image.title = "Tricou Nou";
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = "Tricou Nou";
    figure.appendChild(image);
    figure.appendChild(figcaption);
    const newShirtsContainer = document.getElementById('tricourandom');
    newShirtsContainer.appendChild(figure);
  }
});
document.getElementById('favorite-shirt-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const fileName = document.getElementById('shirt-input').value;
const imageUrl = './tricouri/' + fileName + '.jpg';

  // Create an img element for the shirt
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = "Tricou Preferat";
  image.title = "Tricou Preferat";
  const shirtContainer = document.getElementById('favorite-shirt-container');
  shirtContainer.innerHTML = "";
  shirtContainer.appendChild(image);
});
const acasaSection = document.getElementById('acasa');
const h2Element = acasaSection.querySelector('h2');

function hideH2Element() {
  h2Element.style.display = 'none';
}

// Hide the h2 element after 5 seconds (5000 milliseconds)
setTimeout(hideH2Element, 5000);

document.addEventListener('DOMContentLoaded', function() {
  // Find all anchor elements with the class "submeniu"
  const subMenuLinks = document.querySelectorAll('.submeniu a');

  // Loop through each anchor element
  subMenuLinks.forEach(function(link) {
    // Check the href value of the anchor
    const href = link.getAttribute('href');
    if (href === '#acasa') {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  });
});


