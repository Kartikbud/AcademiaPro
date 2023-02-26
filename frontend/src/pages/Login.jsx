function Login() {
  return (
 
    <div class = "homepage">
        <div class = "box1">
            <div class="login">
                <form>
                    <label>Returning User. Welcome Back</label>
                    <input type="text" name="txt" placeholder="Name" required=""/>
                    <input type="password" name="pswd" placeholder="Password" required=""/>
                    <button><a href = "teachersignin.html" >Log In</a></button>
                </form>
                <label>New To Academia Pro. Create An Account For Free Today</label>
                <button><a href = "signup.html" >Sign Up</a></button>
            </div>
        </div>
        <div class = "images1">
            <img src = "logo5.png"  width = "500" height = "180" alt = "wadwad"/>
            <h1>Our Mission: Sum Messagewadawdwadwaawd</h1>
        </div>
    </div>
  )
}

export default Login