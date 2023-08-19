import logo from './logo.svg';
import './App.css';
// ChakraProvider component
import { ChakraProvider } from '@chakra-ui/react'

// Imported Components
import BaseComponent from './components/BaseComponent';

function App() {
  return (
    // Wrap the entire application in ChakraProvider
    <ChakraProvider>
      <BaseComponent />
    </ChakraProvider>
  );
}

export default App;
