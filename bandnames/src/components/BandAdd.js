import { useState } from "react";

import { useSocket } from "../hooks/useSocket";

export function BandAdd() {
  const [value, setValue] = useState("");

  const {socket} = useSocket("http://localhost:8080");

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
