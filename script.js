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

//Initializing empty hand
let randomHand = []

//Randomizing hand 
const handRandomizer = (cardsInHand) => {

	randomHand = Array.from({length:cardsInHand || 5},(v,i)=> i = deck[Math.floor(Math.random() * deck.length)])
	return randomHand

}

//Sorting the hand
const handSort = (randomHand) => {

//Setting empty array for final outcome
	
	let outcome = []

//Splitting the suits from values

	const splitValues = []
	const splitSuits = []

	for(let i=0; i<randomHand.length;i++){
		let split = randomHand[i].split("")
		splitValues.push(split[0])
		splitSuits.push(split[1])

	}console.log(splitValues, splitSuits)


//Sorting the values

	const returnable = splitValues.reduce((acc, it) => {

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

	for(let i=0;i<values.length;i++){
	if(values[i].length == 2){
		outcomePairs.push(values[i])
	} else if(values[i].length == 3){
		outcomePairs.push(values[i])
	} else if(values[i].length == 4){
		outcomePairs.push(values[i])
	} else {
		console.log('not a pair', values[i])
	}
	} console.log('pairs', outcomePairs)
	

//Calculating straight in the hand
	
	let outcomeStraight = []

	if(outcomePairs = []){
	
	let valuesStraight = JSON.parse(JSON.stringify(values.flat().map(it => it.length === 1 ? it[0] : it).join("")))
	let straights = "2345A | 23456 | 34567 | 45678 | 56789 | 6789T | 789JT | 89JQT | 9JKQT | AJKQT"
	console.log(valuesStraight)
	if(straights.includes(valuesStraight)) {
		outcomeStraight.push(values)
	} else {
		outcomeStraight = false
	}

	} console.log('straight', outcomeStraight)


//Checking for flush in the hand
	
	let outcomeFlush = []

	if(outcomePairs = []){
	flushHearts = splitSuits.every(it=> it==="h")
	flushClubs = splitSuits.every(it=> it==="c")
	flushDiamonds = splitSuits.every(it=> it==="d")
	flushSpades = splitSuits.every(it=> it==="s")

	if(flushHearts||flushClubs||flushDiamonds||flushSpades){
		outcomeFlush = {Hearts:flushHearts,Clubs: flushClubs,Diamonds: flushDiamonds,Spades: flushSpades}
	} else {
		outcomeFlush = false
	}
	}console.log('flush', outcomeFlush)

//Checking for straight flush

	if(outcomeStraight&&outcomeFlush) {
		console.log("straightflush")
	}
}