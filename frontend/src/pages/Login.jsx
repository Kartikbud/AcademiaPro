function Login() {
  return (
    <>
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

            <div class = "text">
                
                <h1> Engage.</h1>
                <h1> Encourage. </h1>
                <h1> Succeed.</h1>
            </div>

            <div class = "images1">
                <img src = {require ("../images/logo1.png")} width = "400" height = "266" alt = ""/>
            </div>

        </div>

    </>
  )
}

export default Login