import Home from "./Home"
import BlogDetails from "./BlogDetails"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Create from "./Create"

function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
