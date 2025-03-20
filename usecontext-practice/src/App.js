import logo from './logo.svg';
import './App.css';
import { UserProvider } from './Components/UserContext/UserContext';
import Notifications from './Components/Notifications/Notifications';


function App() {
  return (
    <div>
        <UserProvider>
      <Notifications/>
    </UserProvider>
    </div>
    
  );
}

export default App;
