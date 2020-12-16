import { useState, useContext } from "react";
import { SocketContext } from '../context/SocketContext';

export function BandAdd() {
  const [value, setValue] = useState("");

  const {socket} = useContext(SocketContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if(value.trim().length) {
      socket.emit('create-band', {name: value})
      setValue("");
    };
  };

  return (
    <>
      <h3>Agregar Banda</h3>

      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Nobre de la banda"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
}
