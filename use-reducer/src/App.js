import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'first-name':
      return {
        ...state,
        firstName: action.payload,
      };

    case 'last-name':
      return {
        ...state,
        lastName: action.payload,
      };

    case 'email':
      return {
        ...state,
        email: action.payload,
      };

    case 'password':
      return {
        ...state,
        password: action.payload,
      };

    case 'submit':
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleFirstName = (event) => {
    dispatch({
      type: 'first-name',
      payload: event.target.value,
    });
  };
  const handleLastname = (event) => {
    dispatch({
      type: 'last-name',
      payload: event.target.value,
    });
  };
  const handleEmail = (event) => {
    dispatch({
      type: 'email',
      payload: event.target.value,
    });
  };
  const handlePassword = (event) => {
    dispatch({
      type: 'password',
      payload: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    dispatch({
      type: 'submit',
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            value={state.firstName}
            onChange={handleFirstName}
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" value={state.lastName} onChange={handleLastname} />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" value={state.email} onChange={handleEmail} />
        </div>
        <div className="field">
          <label> Password</label>
          <input
            type="password"
            value={state.password}
            onChange={handlePassword}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
