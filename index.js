const h1 = document.createElement("h1")
h1.textContent = "Yo yo, world"
h1.className = "header"
console.log(h1)
// document.getElementById("root").append(h1)


const element = <h1 className="header">Hello</h1>
console.log(element)

ReactDOM.render(element, document.getElementById("root"))