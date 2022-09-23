 function Header() {
  return ( 
    <header>
        <nav className="nav-bar">
          <img src="react-icon.svg" className="img-logo"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
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
    <footer className="main-footer">
        <small>&copy; 2022 Dookie Master. All rights reserved</small>
    </footer>
  )
 }
 
 function MyPage() {
  return (
    <div className="main-page">
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