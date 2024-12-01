const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
 
let currentSlide = 0;

// Je récupère l'image, le texte et le conteneur des points
const bannerImg = document.querySelector('#banner .banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('#bullet_point');

// Cette fonction change l'image et le texte du slide
function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;

    // Je mets à jour les points en fonction du slide actif
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.style.backgroundColor = 'white'; // Le point actif est blanc
            dot.style.border = 'none'; // Pas de bordure pour celui actif
        } else {
            dot.style.backgroundColor = 'gray'; // Les autres points sont gris
            dot.style.border = '1px solid white'; // Avec une bordure blanche
        }
    });
}
