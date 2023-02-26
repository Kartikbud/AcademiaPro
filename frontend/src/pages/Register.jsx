function Register() {
  return (

    <div class = "homepage">
      <div class = "box1">
        <div class="signup">
            <form>
                <label>New To Academia Pro. Create An Account For Free Today</label>
                <input type="text" name="txt" placeholder="Name" required=""/>
                <input type="text" name="txt" placeholder="Email" required=""/>
                <input type="password" name="pswd" placeholder="Select a Password" required=""/>
                <input type="password" name="pswd" placeholder="Confirm Your Password" required=""/>

                <button><a href = "teachersignin.html" >Sign Up</a></button>
            </form>
        </div>
      </div>
    </div>

  )
}

export default Register