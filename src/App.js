import './App.css';
import Layout from './components/Layout/layout.component';
import { UserProvider } from './contexts/user/user.context';

//App component with user context wrapped to get access to form data
const App = () => {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>

  );
}

export default App;
