import axios from 'axios';
import { useEffect, useState } from 'react';

//const axios = require('axios').default; // not needed since we direct imported axios
// axios has been installed
export function AxiosGetUser() {
    const [user, setUser] = useState({ title: String, firstname: String, lastname: String, picture: String });
    const fetchURL = 'https://api.randomuser.me/'; // to display: name[title], name[firstname], picture[medium]

    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setUser({ 
                    title: response.data.results[0].name.title, 
                    firstname: response.data.results[0].name.first, 
                    lastname: response.data.results[0].name.last, 
                    picture: response.data.results[0].picture.medium 
                });
                //console.log(response.data.results[0])
                //console.log(user)
            }).catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []); // <- [] indicate render once on first page load



    return (
        <>
            <h2>{user.title}. {user.firstname} {user.lastname}</h2>
            <img src={user.picture} />
        </>
    )

}


/*
// sample methods:
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
        ID: 12345
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
*/