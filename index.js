 function MyPage() {
  return (
    <div>
      <header>
        <nav>
          <img src="react-icon.svg" width="40px"/>
        </nav>
      </header>
      <h1>Why I want to learn stuffs</h1>
        <ol>
          <li>Learn things</li>
          <li>Make things</li>
          <li>Clap things</li>
          <li>Yelp things</li>
        </ol>
      <footer>
        <h6>&copy; 2022 Dookie Master. All rights reserved</h6>
      </footer>
    </div>
  )
 }

 ReactDOM.render(
  <MyPage />, 
  document.getElementById("root")
 )