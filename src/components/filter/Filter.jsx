import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { selectFilter} from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  
  const filter = useSelector(selectFilter);

  return (
    <label className={css.label_title}>
      Find contact by name:
      <input
        className={css.filter_input}
        onChange={e => dispatch(setFilter(e.target.value))}
        type="name"
        value={filter}
      ></input>
    </label>
  );
};

export default Filter;
