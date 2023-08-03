
// IMPORTANT NOTE 
// ****************************************************************
//              THIS COMPONENT IS NO LONGER IN USE
// ****************************************************************

import { ListofPlayers, Scorebelow70, players } from './ListofPlayers';
import { EvenPlayers, IndianPlayers, OddPlayers } from './IndianPlayers';

export function SelectRender(flag) {
    //console.log(players[0].name);


    if (flag === true) {
        return (
            <div className="App">
                <h1>List of Players</h1>
                <ul>
                    <ListofPlayers players={players} />
                </ul>
                <hr />
                <h1>List of Players with Scores below 70</h1>
                <Scorebelow70 players={players} />
            </div>
        );
    } else {
        return (
            <div className="App">
                <h1>Odd players</h1>
                <ul>
                    <OddPlayers items={players} />
                </ul>
                <hr />
                <h1>Even players</h1>
                <ul>
                    <EvenPlayers items={players} />
                </ul>
                <hr />
                <h1>List of Indian Players Merged:</h1>
                <ul>
                    <IndianPlayers />
                </ul>
            </div>
        )
    }
}
