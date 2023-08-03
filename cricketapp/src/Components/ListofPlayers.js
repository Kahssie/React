// declare array w 11 players, store details using map feature

export const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 95 },
    { name: "Sachin", score: 100 },
    { name: "Dhoni", score: 84 },
    { name: "Virat", score: 64 },
    { name: "Jadeja", score: 75 },
    { name: "Rohit", score: 80 }
];

export function ListofPlayers(list) {
    return (
        list.players.map(
            (item) => {
                return (
                    <>
                        <li>Mr. {item.name} {item.score}</li>
                    </>
                );
            })
    );
}


// Filter the players with scores below 70 using arrow functions of ES6
// THIS FUNCTION FAILS USING MAP BC IT WILL SKIP EMPTY VALUES AND CREATE AN UNDEFINED ARRAY
/*
function FilterPlayers() {
    let out = players.map(
        (item) => {
            if (item.score <= 70) {
                players70.push(item);
            }
            return item;
        }
    )
    console.log("filtered: " +out);
}
*/

export function Scorebelow70(){
    
    const list = players.filter(item=> item.score<=70).map(
            (item, idx) => {
                //console.log("item:" + item.name);
                return (
                        <li>{item.name} {item.score}</li>
                )
            }
        )

    return list;
}

//less condensed code
/* 
export function Scorebelow70(){
    //FilterPlayers(players);
    const out = players.filter(
        (item) => {
            if (item.score <= 70) {
                return item;
            }
        }
    )
    console.log("filtered70: " + out);
    
    const list = out.map(
            (item, idx) => {
                //console.log("item:" + item.name);
                return (
                        <li>{item.name} {item.score}</li>
                )
            }
        )

    return list;
} */