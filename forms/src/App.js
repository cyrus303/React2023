import { useState, useEffect } from 'react';
import DropdownForm from './DropdownForm';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');

  const [formInputs, setFormInputs] = useState([
    {
      firstName: 'Sachin',
      lastName: 'Mahesh',
      email: 'sachin.mahesh@esb.ie',
      password: 'qwert123',
      selectedFruit: 'Kiwi',
    },
  ]);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSelect = (event) => {
    setSelectedFruit(event.target.value);
    console.log(event.target.value, selectedFruit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedValue = {
      firstName,
      lastName,
      email,
      password,
      selectedFruit,
    };
    setFormInputs((prevFormValue) => [...prevFormValue, updatedValue]);
    console.log(formInputs);
  };
  console.log('outside', formInputs);

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
            onChange={handleFirstName}
            value={firstName}
          />
        </div>
        <div className="last-name">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            placeholder="Enter last name"
            onChange={handleLastName}
            value={lastName}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleEmail}
            value={email}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <label>
          Pick a fruit:
          <select
            name="selectedFruit"
            value={selectedFruit}
            onChange={handleSelect}
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        {selectedFruit === 'apple' && (
          <label>
            Region
            <select name="selectedFruit">
              <option value="apple">one</option>
              <option value="banana">two</option>
              <option value="orange">three</option>
            </select>
          </label>
        )}
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
