import '../styles/_buttom.css'
const Button = ({ text, type = "button", onClick }) => {
  return (
    <button className="btn w-full" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
