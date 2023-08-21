import { useState } from 'react';
import './App.css';
import MyRoutes from './services/routes';
import userProvider from './services/userProvider';

function App() {
  const [user, setUser] = useState({})
  return (
    <div>
      <userProvider.Provider value={[user, setUser]}>
        <MyRoutes/>
      </userProvider.Provider>
    </div>
  );
}

export default App;
