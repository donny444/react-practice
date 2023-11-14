import React, { useContext } from 'react';

const MyContext = React.createContext();

function Example() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}

//Provided by GPT-4