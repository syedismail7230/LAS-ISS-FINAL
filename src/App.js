import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import DataDisplay from "./DataDisplay"; // Update this path based on your project structure
import "./App.css";
import HomePage from "./HomePage";

const App = () => {
  return (
    // <div>
    //   <center>
    //     <Link to="/">
    //       <img
    //         className="Header-img"
    //         src="https://cdn.discordapp.com/attachments/1121100423818907739/1134483528688603227/google-form_header.png"
    //         alt="Laurel shit"
    //         height={200}
    //       />
    //     </Link>
    //     <Switch>
    //       <Route path="/data/:id" Component={DataDisplay} />
    //     </Switch>
    //   </center>
    // </div>

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                className="Header-img"
                src="https://cdn.discordapp.com/attachments/1121100423818907739/1134483528688603227/google-form_header.png"
                alt="Laurel shit"
                height={200}
              />
            </Link>
          </li>
          {/* Add other navigation links if needed */}
        </ul>
      </nav>
      <Switch>
        <Route path="/data/:id" component={DataDisplay} />
        {/* Add other routes if needed */}
      </Switch>
      {/* <DataDisplay /> */}
      <HomePage />
    </div>
  );
};

export default App;
