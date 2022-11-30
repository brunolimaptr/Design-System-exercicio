import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  SocialProfileWithImage from "./components/card"

const array = [{nome: "Bruno", altura:"171", idade: "30"},
               {nome: "João", altura:"160", idade: "60"},
               {nome: "Carlos", altura:"190", idade: "70"}]




function App() {

  const [item, setItem] = useState(array)


  return (
    <ChakraProvider >
      {item.map((objeto) => {
        return <SocialProfileWithImage
        nome={objeto.nome}
        altura={objeto.altura}
        idade={objeto.idade}/>
      })}
      
    </ChakraProvider>
  );
}

export default App;
