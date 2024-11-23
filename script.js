// Let's start by defining the passenger's name from their pass
const nameOnPass = "San San";

// We'll print out the passenger's name to the console for confirmation
console.log("Passenger Name: " + nameOnPass);

// Now, let's define the name on the ID (it should match the name on the pass)
const nameOnId = "San San";

// We'll check if the name on the pass matches the name on the ID
const nameMatch = nameOnPass === nameOnId;

// Let's log if the ID was confirmed by comparing the names
console.log("ID confirmed? " + nameMatch);

// Next, we define the baggage's length (for example, in centimeters or inches)
const length = 30;

// We check if the length of the baggage is under the allowed limit
const doesLengthPass = length < 30;

// Now, let's define the baggage's height
const height = 60;

// We check if the height of the baggage is also under the allowed limit
const doesHeightPass = height < 55;

// We'll check if the baggage is eligible for hand baggage based on both length and height
const isHandBaggageEligible = doesLengthPass && doesHeightPass;

// Let's print out whether the hand baggage meets the eligibility requirements
console.log("Is Hand Baggage Eligible? " + isHandBaggageEligible);

// Now, let's define the flight destination (where we're flying to)
const flightDes = "Bergen, Norway";

// And define the city where the return flight is coming from
const returnFrom = "Trondheim, Norway";

// We'll check if the destination is the same as the return city (to see if it's a round trip)
const isRoundTrip = flightDes === returnFrom;

// Let's log if the trip is a round trip or just one-way
console.log("Round Trip Check? " + isRoundTrip);

// Now, let's define how many bookings have been made for the flight
const bookings = 45;

// And let's define how many seats are available on the flight
const totalCapacity = 40;

// We'll check if the number of bookings is less than the total seats (if there are still seats available)
const isFlightAvailable = bookings < totalCapacity;

// Let's log whether or not seats are still available for the flight
console.log("Are seats available? " + isFlightAvailable);

// Finally, let's display the passenger's name on the webpage (in an HTML element with ID 'name')
document.querySelector("#name").innerHTML = nameOnPass;

// We'll show if the ID matches on the webpage (in an HTML element with ID 'id')
document.querySelector("#id").innerHTML = nameMatch;

// Now, let's display whether the hand baggage is eligible on the webpage (in an HTML element with ID 'bag')
document.querySelector("#bag").innerHTML = isHandBaggageEligible;

// We'll display if the trip is a round trip on the webpage (in an HTML element with ID 'des')
document.querySelector("#des").innerHTML = isRoundTrip;

// Lastly, we'll display if seats are available on the webpage (in an HTML element with ID 'seat')
document.querySelector("#seat").innerHTML = isFlightAvailable;
