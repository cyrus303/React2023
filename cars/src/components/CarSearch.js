import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();

  const carsList = useSelector((state) => {
    return state.cars;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={carsList.searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;