import {useState} from "react"

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    )
}

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    }
    else {
        button = <LoginButton onClick={handleLoginClick} />
    }
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    )
}

function UserGreeting(props) {
    return <h1>UserGreeting 호출</h1>
}

function GuestGreeting(props) {
    return <h1>GuestGreeting 호출</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default LoginControl;