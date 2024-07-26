const Spinner = ({color}) => {
  return (
    <div className="spinner">
      <div className={`spinner__icon ${color === 'white' ? 'spinner__icon-white' : 'spinner__icon-blue'}`}></div>
    </div>
  )
}
export default Spinner;