import "./ExpensesFilter.css";
export default function ExpensesFilter(props) {
  return (
    <div className="expenses-filter">
      <div> Filter By Year</div>
      <div className="expenses-filter__control">
        <select onChange={props.onChangeFilter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
