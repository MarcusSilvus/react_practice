import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

 
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