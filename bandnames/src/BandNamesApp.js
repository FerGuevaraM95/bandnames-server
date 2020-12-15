import {SocketProvider} from './context/SocketContext';
import App from './App';

export const BandNames = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  );
}