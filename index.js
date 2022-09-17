

const page = (
  <div>
    <img src="react-icon.svg" height="50" width="50"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was released in 2013</li>
      <li>Was orginally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)

ReactDOM.render(
  page,
  document.getElementById("root")
)