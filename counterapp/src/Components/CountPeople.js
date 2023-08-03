import { useState } from 'react';

// two methods

// UpdateEntry() -> display # people entered the mall
    // replaced with handleNextEntryClick
// UpdateExit() -> display # people exit the mall
    // replaced with handleNextExitClick
//  - store entrycount & exitcount with state
//  1.Login  when clicked, the entrycount should get incremented by 1
// 2. Exit  when clicked, the exitcount should get incremented by 1

export default function CountPeople() {
    const [entrycount, setEntryCount] = useState(0);
    const [exitcount, setExitCount] = useState(0);

    function handleNextEntryClick() {
        setEntryCount(entrycount + 1);
    }

    function handleNextExitClick() {
        setExitCount(exitcount + 1);
    }

    return (
        <>
            <div className="rowC">
                <button onClick={handleNextEntryClick}>
                    Login
                </button>
                <p>{entrycount} people have entered the mall!</p>
            </div>
            <div className="rowC">
                <button onClick={handleNextExitClick}>
                    Exit
                </button>
                <p>{exitcount} people have left the mall!</p>
            </div>
        </>
    );
}

// using:
    //<p> {entrycount} people entered.</p>
    //<button onClick={() => setEntryCount(numberRuns + 1)}>Login</button>
// would also work