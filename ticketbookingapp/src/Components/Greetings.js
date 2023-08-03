// <UserGreeting /> : <GuestGreeting />

export function Greeting(props) {
    console.log(props.isLoggedIn);
    const isLoggedIn = props.isLoggedIn;
  
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

function UserGreeting(){
    return (
        <h1>Welcome back</h1>
    )
}

function GuestGreeting(){
    return (
        <h1>Please sign up.</h1>
    )
}


