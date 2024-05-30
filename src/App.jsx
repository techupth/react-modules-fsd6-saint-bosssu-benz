import "./App.css";
import { Header, MainContent, ProductSection, FAQ, Footer } from "./components/code";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </div>
    //</ChakraProvider>
  );
}

export default App;
