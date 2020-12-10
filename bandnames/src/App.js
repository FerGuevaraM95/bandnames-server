import { useState, useEffect } from "react";
import io from "socket.io-client";

import { BandList } from "./components/BandList";
import { BandAdd } from "./components/BandAdd";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true);
    })
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false);
    })
  }, [socket]);

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands);
    })
  }, [socket]);

  const vote = (id) => {
    socket.emit('vote-band', id)
  }

  const deleteBand = (id) => {
    socket.emit('delete-band', id)
  }

  const changeSocketName = (id, name) => {
    socket.emit('change-name-band', {id, name})
  }

  const createBand = (name) => {
    socket.emit('create-band', {name})
  }

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            vote={vote}
            deleteBand={deleteBand}
            changeSocketName={changeSocketName}
          />
        </div>
        <div className="col-4">
          <BandAdd 
            createBand={createBand}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
