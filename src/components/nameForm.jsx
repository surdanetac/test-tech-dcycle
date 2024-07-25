import { useState } from 'react';
import Button from './buttom';
import Input from './input';

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="w-full mt-1">
      <div className="container-card">
        <form
          onSubmit={handleSubmit}
          className="form-chatbox-form"
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} labelText="Ingresa tu nombre" containerClass="form-mb-5"></Input>
          <Button text="Confirmar" type="submit" ></Button>
        </form>
      </div>
    </div>
  );
};

export default NameForm;