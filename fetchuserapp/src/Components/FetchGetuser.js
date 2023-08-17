import { useState, useEffect } from 'react';

export function FetchGetUser() {
    const [user, setUser] = useState(null);
    const fetchURL = 'https://api.randomuser.me/'; // to display: name[title], name[firstname], picture[medium]

    // callback function to store user data
    const fetchUser = async () => {

        const data = await (
            await fetch(fetchURL)
            ).json();
        //console.log(data.results[0])
        setUser(data.results[0]);
        //console.log("user:" + user)
    }

    // useEffect to run on page load
    useEffect(() => {
        fetchUser();
    }, []);

    if (user){
        return (
            <>
                <h2>{user.name.title}. {user.name.first} {user.name.last}</h2>
                <img src={user.picture.large} />
            </>
        )
    } else {return <p>No data could be parsed, sorry!!</p>}
}

/*
{error && <p className="text-danger">{error}</p>}

.catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
            */
