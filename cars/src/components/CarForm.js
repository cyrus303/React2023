import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();

  const form = useSelector((state) => {
    return state.form;
  });

  const handleNameChange = (event) => {
    const action = changeName(event.target.value);
    dispatch(action);
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    const action = changeCost(carCost);
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name !== '' && form.cost !== 0) {
      dispatch(addCar(form));
    }
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3"> Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <div className="label">Name</div>
            <input
              type="text"
              className="input is-expanded"
              value={form.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <div className="label">Cost</div>
            <input
              type="text"
              className="input is-expanded"
              value={form.cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
