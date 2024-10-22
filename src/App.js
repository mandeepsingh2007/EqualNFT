import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Banner from './components/Banner';
import RegisterForm from './components/RegisterForm';
import Staking from './components/Staking';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
