import { useState } from 'react';
import Button from './buttom';
import Input from './input';

const NameForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="name-form">
      <div className="name-form__container">
        <form
          onSubmit={handleSubmit}
          className="name-form__form"
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} labelText="Ingresa tu nombre" containerClass="name-form__input"></Input>
          <Button disabled={loading} text="Confirmar" type="submit" ></Button>
        </form>
      </div>
    </div>
  );
};

export default NameForm;