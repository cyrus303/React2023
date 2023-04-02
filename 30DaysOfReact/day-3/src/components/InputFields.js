const formStyles = {
  // border: '1px solid red',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '600px',
  padding: '20px',
};

const inputStyles = {
  padding: '10px',
  borderRadius: '5px',
  outline: 'none',
};

const buttonStyles = {
  backgroundColor: '#f17376',
  color: 'white',
  width: '400px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '10px',
};

function InputFields() {
  return (
    <div>
      <form style={formStyles}>
        <input type="text" placeholder="First Name" style={inputStyles} />
        <input type="text" placeholder="Last Name" style={inputStyles} />
        <input type="text" placeholder="Email" style={inputStyles} />
      </form>
      <button style={buttonStyles}>Subscribe</button>
    </div>
  );
}

export default InputFields;
