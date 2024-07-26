const Button = ({ text, type = "button", disabled = false, onClick }) => {
  return (
    <button disabled={disabled} className="btn w-full" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
