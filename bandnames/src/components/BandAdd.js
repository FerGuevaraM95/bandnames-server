import { useState } from "react";

export function BandAdd({createBand}) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if(value.trim().length) {
      createBand(value);
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
