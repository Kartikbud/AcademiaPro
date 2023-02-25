function Login() {
  return (
 
    <div class="login">
        <form>
            <label>Returning User. Welcome Back</label>
            <input type="text" name="txt" placeholder="Name" required=""/>
            <input type="password" name="pswd" placeholder=" Password" required=""/>
            <button><a href = "teachersignin.html" >Log In</a></button>
        </form>
    </div>
  )
}

export default Login