// Display the Odd Team Player and Even Team players using the Destructuring features of ES6

// trying destructure
function Destructure(playerList) {
    //console.log(playerList);
    let [first, , third, , fifth, ..._] = playerList;
    //console.log(first);
    return [first, third, fifth];
}

export function OddPlayers(playerList) {
    //console.log(playerList.items);
    //console.log( [playerList.items.map((player) => player.name)]);
    const mappedPlayers = playerList.items.map((player) => [player.name]);

    // test: using destructure but maintaining entire object
    //const mappedPlayers = playerList.items.map((player) => [player]);
    let [first, third, fifth] = Destructure(mappedPlayers);
    return (
        <div>
            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
        </div>
    )
    // <li>First: {first.name}<span>{first.score}</span></li>
}

// hard coded method
export function EvenPlayers(playerList) {
    return (
        <div>
            <li>Second: {playerList.items[1].name}</li>
            <li>Fourth: {playerList.items[3].name}</li>
            <li>Sixth: {playerList.items[5].name}</li>
        </div>
    )
}

// Declare arrays T20Players & RanjiTrophyPlayers
// merge the two arrays & display using Merge feature of ES6
const t20Players = ['First Player', 'Second Player', 'Third Player']
const ranjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player']
const indianPlayers = [...t20Players, ...ranjiTrophyPlayers]

export function IndianPlayers() {
    console.log(indianPlayers);
    return indianPlayers.map(
        player => {
            console.log("player:"+player);
            return (<li>Mr. {player}</li>)
        }
            
    )
}
