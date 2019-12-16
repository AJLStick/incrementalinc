// Initializing the variables that we will need
// Feel free to adjust the values to suit your preferences
let pencils = 0.0,
	pencilMakers = 0,
	pencilsPerSec = 0.5, // number of pencils per second per pencil maker
	pencilSharpeners = 1,
	pencilMakerPrice = 10, // the initial price in pencils
	pencilSharpenerPrice = 10; // the initial price in pencils

// Called when the player presses the 'Make more pencils button'
function makePencils() {
	// Adding pencils to the player's inventory each time the button is pressed
	pencils += pencilSharpeners;

	// Updating document HTML after each button press
	// (x).toFixed(n) means that n decimal places will be shown when x is printed
	document.getElementById("pencil-count").innerHTML = pencils.toFixed(0);
}

// Called when the player presses the 'Buy a pencil maker' button
function buyPencilMaker() {
	// Checking whether the player can buy a pencil maker
	if(pencils >= pencilMakerPrice) {
		// Buying a pencil maker - note the order in which the statements are called
		pencils -= pencilMakerPrice;

		// Incrementing the price of successive pencil makers after each purchase
		pencilMakerPrice += 3;

		// Adding a pencil maker to they player's inventory
		pencilMakers++;

		// Updating document HTML after each successful purchase
		updateResources();
	}
}

// Called when the player presses the 'buy a pencil sharpener' button
function buyPencilSharpener() {
	if(pencils >= pencilSharpenerPrice) {
		// Buying a pencil sharpener - see corresponding comments above
		pencils -= pencilSharpenerPrice;
		pencilSharpenerPrice += (10 + pencilSharpeners);
		pencilSharpeners++;

		updateResources();
	}
}

// Creating a looping timer that invokes addPencils() every 1/10th* of a second 
let ticksPerSecond = 10;
let tickPencils = setInterval(addPencils, 1000 / ticksPerSecond);

// Adding the pencils created by pencil makers every time tickPencils loops
function addPencils() {
  // The math is not as complex as it may seem at first
	pencils += pencilMakers * pencilsPerSec / ticksPerSecond;
	document.getElementById("pencil-count").innerHTML = pencils.toFixed(0);
}

// Updating the document HTML to match the game code
// Note that this is not the most efficient way to sync the page
function updateResources() {
	// Retrieving an element by ID ( <[e] id="..."> ) and modifying the text stored within
	document.getElementById("pencil-count").innerHTML = pencils.toFixed(0);
	document.getElementById("maker-count").innerHTML = pencilMakers;
	document.getElementById("sharpener-count").innerHTML = pencilSharpeners;

	document.getElementById("pencils-per-click").innerHTML = pencilSharpeners;
	document.getElementById("pencils-per-second").innerHTML = (pencilMakers * pencilsPerSec).toFixed(2);

	document.getElementById("maker-cost").innerHTML = pencilMakerPrice;
	document.getElementById("sharpener-cost").innerHTML = pencilSharpenerPrice;
}
