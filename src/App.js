import './App.css';
import Layout from './components/Layout/layout.component';
import { UserProvider } from './contexts/user/user.context';

const App = () => {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>

  );
}

export default App;
