const section = document.querySelector('section');

const playerLivesCount = document.querySelector('span');

const playerLives = 10;

/* console.log(playerLivesCount); */

/* Link text */
playerLivesCount.textContent = playerLives;

// We generate the object
const getData = () => [
	{ imgSrc: "./images/beatles.jpeg", name: "beatles" },
	{ imgSrc: "./images/blink182.jpeg", name: "blink 182" },
	{ imgSrc: "./images/pinkfloyd.jpeg", name: "fka twigs" },
	{ imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
	{ imgSrc: "./images/joy-division.jpeg", name: "joy division" },
	{ imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
	{ imgSrc: "./images/metallica.jpeg", name: "metallica" },
	{ imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
	{ imgSrc: "./images/beatles.jpeg", name: "beatles" },
	{ imgSrc: "./images/blink182.jpeg", name: "blink 182" },
	{ imgSrc: "./images/fkatwigs.jpeg", name: "fkatwigs" },
	{ imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
	{ imgSrc: "./images/joy-division.jpeg", name: "joy-division" },
	{ imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
	{ imgSrc: "./images/metallica.jpeg", name: "metallica" },
	{ imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
];

// Randomize
const randomize = () => {
    const cardData = getData();
    /* Función que permite aleatorizar los datos en un array */
    cardData.sort( () => Math.random() - 0.5 ); 
    return cardData;
};

// Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    // Generate the HTML
    cardData.forEach((item) => {
		const card = document.createElement("div");
		const face = document.createElement("img");
		const back = document.createElement("div");
		card.classList = "card";
		face.classList = "face";
		back.classList = "back";
		// Attach the info the cards
		face.src = item.imgSrc;
		// Attach the card to the section
		section.appendChild(card);
		card.appendChild(face);
		card.appendChild(back);

		card.addEventListener('click', (e) => {
			card.classList.toggle('toggleCard');
		});
    });
};

// Card Generator Function
cardGenerator();
