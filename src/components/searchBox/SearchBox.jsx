import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { filterContacts } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filters.name);
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterData}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
}
