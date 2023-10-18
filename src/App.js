import './App.css';
// ChakraProvider component
import { ChakraProvider } from '@chakra-ui/react'

// Imported Components
import BaseComponent from './components/BaseComponent';

function App() {
  return (
    <ChakraProvider>
      <BaseComponent />
    </ChakraProvider>
  );
}

export default App;
