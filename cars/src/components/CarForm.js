import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName } from '../store';

function CarForm() {
  const dispatch = useDispatch();

  const form = useSelector((state) => {
    return state.form;
  });

  console.log(form);

  const handleNameChange = (event) => {
    const action = changeName(event.target.value);
    dispatch(action);
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    const action = changeCost(carCost);
    dispatch(action);
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3"> Add Car</h4>
      <form>
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
              type="number"
              className="input is-expanded"
              value={form.cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
