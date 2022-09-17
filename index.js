 function Header() {
  return ( 
    <header>
        <nav>
          <img src="react-icon.svg" width="40px"/>
        </nav>
    </header>
  )
 }

 function Body() {
  return (
    <div>
      <h1>Why I want to learn stuffs</h1>
          <ol>
            <li>Learn things</li>
            <li>Make things</li>
            <li>Clap things</li>
            <li>Yelp things</li>
      </ol>
    </div>
  )
 }

 function Footer() {
  return (
    <footer>
        <small>&copy; 2022 Dookie Master. All rights reserved</small>
    </footer>
  )
 }
 
 function MyPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
 }

 ReactDOM.render(
  <MyPage />,
  document.getElementById("root")
 ) 