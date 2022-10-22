//Setting base cards
const cards = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"]

//Settings suits
const suits = {
	Hearts: "h",
	Clubs : "c",
	Spades : "s",
	Diamonds: "d",
}

//Suiting cards
const hearts = cards.map(it => it+suits.Hearts)
const clubs = cards.map(it => it+suits.Clubs)
const spades = cards.map(it => it+suits.Spades)
const diamonds = cards.map(it => it+suits.Diamonds)

//Constructing deck
const deck = [...hearts, ...clubs, ...spades, ...diamonds]
const deck2 = [...cards,...cards,...cards,...cards]

//Initializing empty hand
let randomHand = []

//Randomizing hand 
const handRandomizer = (cardsInHand) => {

	randomHand = Array.from({length:cardsInHand || 5},(v,i)=> i = deck2[Math.floor(Math.random() * deck2.length)])
	return randomHand

}

//Sorting the hand
const handSort = (randomHand) => {

	const returnable = randomHand.reduce((acc, it) => {

    if (acc[it]) {
      acc[it] = [...acc[it], it];
    } else {
      acc[it] = [it];
    } 

    return acc;
 	}, {});

	console.log(returnable)

	let values = Object.values(returnable).sort()

//Calculating pairs/triples/quads in the hand

	

	let outcomePairs = []

	for(i=0;i<values.length;i++){
	if(values[i].length == 2){
		outcomePairs.push(values[i])
	} else if(values[i].length == 3){
		outcomePairs.push(values[i])
	} else if(values[i].length == 4){
		outcomePairs.push(values[i])
	} else {
		outcomePairs = []
	}
	} console.log(outcomePairs)
	

//Calculating straight in the hand


	let outcomeStraight = []

	for (let i =0; i < values.length; i++){
	
	let previous = values[i-1]
	let current = values[i]

    if(previous+1 !== current){
    	outcomeStraight = []
	} else {
		outcomeStraight.push(values[i])
	}
	} console.log(outcomeStraight)
	



	const outcomeFlush = () => {


	}

}