import "../styles/_input.css"

const Input = ({ value, onChange, labelText, placeholder = "", required = false, containerClass }) => {
  return (
    <div className={containerClass}>
      {labelText ? <label className="form-label">{labelText}</label> : <div></div>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </div>
  );
};

export default Input;