import classes from "./input.module.css";

const Input = (prop) => {
  return (
    <div
      className={`${classes.control} ${
        prop.isvalid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={prop.id}>{prop.label}</label>
      <input
        type={prop.type}
        id={prop.id}
        value={prop.value}
        onChange={prop.ChangeHandler}
        onBlur={prop.BlurHandler}
      />
    </div>
  );
};

export default Input;
