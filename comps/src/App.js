import Link from './components/Link';
import Route from './components/Route';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';

function App() {
  return (
    <div>
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to Drowdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
