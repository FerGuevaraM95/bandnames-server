import {useState, useEffect} from 'react';

export function BandList({data, vote}) {

  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data])

  const changeName = (event, id) => {
    const newName = event.target.value;

    setBands(bands => bands.map(band => {
      if (band.id === id) {
        band.name = newName;
      }
      return band
    }));
    
  };

  const onLostFocus = (id, name) => {
    console.log({id, name});

    // TODO Emmit socket

  }

  const createRows = () => {
    return (
      bands.map(band => (
        <tr key={band.id}>
        <td>
          <button 
            className="btn btn-primary"
            onClick={() => vote(band.id)}
          > +1 </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control" 
            value={band.name}
            onChange={(e) => changeName(e, band.id)}
            onBlur={() => onLostFocus(band.id, band.name)}
          />
        </td>
        <td>
          <h3> {band.votes}</h3>
        </td>
        <td>
          <button className="btn btn-danger">
            Borrar
          </button>
        </td>
      </tr>
      ))
    );
  }

  return (
    <>
    <h3>Bandas actuales</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {createRows()}
        </tbody>
      </table>
    </>
  );
}