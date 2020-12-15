import {SocketProvider} from './context/SocketContext';
import HomePage from './Pages/HomePage';

export const BandNames = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
}