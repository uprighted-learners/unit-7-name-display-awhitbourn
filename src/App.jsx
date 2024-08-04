import './App.css';
import React, { useState } from 'react';

function App() {

// Create state variables for each input fields  
  const [firstName, setFirstname] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

//Define a base message
const baseMessage = "Hello, Welcome to wonderful world of Willy Wonka!";

// Compute the full message using the state variable
const fullMessage = `${baseMessage} ${firstName} ${middleName} ${lastName}`;

// Create a handler function for form submission  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(fullMessage);
  };
  
  return (
    <div>
{/*Use the message variable to display the welcome message */}      
      <h1>{baseMessage}</h1>
{/* Add a form with input fields */}
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)} // Update state on change
            placeholder="Enter your first name"
            />
        </label>
      </div>
      <div>
        <label>
          Middle Name:
          <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)} // Update state on change
          placeholder="Enter your middle name(optional)"
          />
        </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // Update state on change
              placeholder="Enter your last name"
            />
          </label>          
        </div>
        <button type="Submit">Submit</button>      
      </form>
    </div>
  );
}

export default App;
