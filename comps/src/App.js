import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          {' '}
          Click Here!{' '}
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!{' '}
        </Button>
      </div>
      <div>
        <Button warning>See Deal! </Button>
      </div>
      <div>
        <Button seconday> Checkout!</Button>
      </div>
    </div>
  );
}

export default App;
