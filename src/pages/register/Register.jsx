import "./register.css"

const Register = () => {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Facebook social</h3>
            <span className="loginDesc">
                Connect with your friends all around the World on Facebook Social!
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Log In to Your Account</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register