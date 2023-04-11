import { useState, useEffect } from 'react';
import DropdownForm from './DropdownForm';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, password });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="first-name">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="Enter first name"
            value={firstName}
          />
        </div>
        <div className="last-name">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            placeholder="Enter last name"
            value={lastName}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
