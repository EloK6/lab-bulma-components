import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import SignUp from "./SignUp.js";
import Message from "./Message.js";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g alexsmith@gmail.com"
        /> */}

        <CoolButton isSmall isDanger className="is-rounded" text="Button1" />
        <CoolButton isSmall isSuccess text="Button2" />

        <SignUp />

        <Message
          isInfo
          title="Hello World"
          messageText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque risus mi."
        />
      </div>
    );
  }
}

export default App;
