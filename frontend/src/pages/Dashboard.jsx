function Dashboard() {
  return (
    <>
      <div class = "main">
        <input type="checkbox" id="check"/>
        <label for="check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-times" id="cancel"></i>
        </label>

        <div class="sidebar">
          <header>Menu</header>
          <span><a href = "index.html" >Log Out</a></span>
        </div>

        <div class = "images">
          <img src = {require ("../images/logo1.png")} width = "210" height = "140" alt = ""/>
      </div>

    </div>
  </>
  )
}

export default Dashboard