import './Regiser.style.css'

export default function Register() {
    return(
    <>
        <div className="zxc1">
            <h1>Register</h1>
            <input type="text" name="name" id="nameinput" />
            <input type="password" name="pass" id="passinput" />
            <button type="submit">Continue</button>
            <h3>You already have an account. <a href="/login">Log in.</a></h3>
        </div>
    </>
)}