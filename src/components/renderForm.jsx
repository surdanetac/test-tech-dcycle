import { useState } from 'react';
import Button from './buttom';
import Input from './input';
const RenderForm = ({ onSubmit }) => {
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
          <div className="form-mb-5">
            <label className="form-label">Ingresa tu nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=""
              required
              className="form-input"
            />
          </div>
          <Input value={name} onChange={(e) => setName(e.target.value)} labelText="Ingresa tu nombre"></Input>
          <Button text="Confirmar" type="submit" ></Button>
        </form>
      </div>
    </div>
  );
};

export default RenderForm;