import React from "react";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
    return (
        <div>
            <nav>
                <h1>My Portfolio</h1>
            </nav>
            <Home id="home" name={user.name} city={user.city} color={user.color} />
            <About id="about" bio={user.bio} links={user.links} />
        </div>
    );
}

export default App;
