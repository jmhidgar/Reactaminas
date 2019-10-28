import React from 'react';

import TestComponent from './TestComponent';

const App = () => {
  const users = [
    'Juanmi',
    'Isma',
    'Erik'
  ];

  // ESTO NO SE HACE ASÍ
  //const users = fetch('/api/user');

  const componentes = [
    <TestComponent user='Juanmi' />,
    <TestComponent user='Isma' />,
    <TestComponent user='Erik' />,
  ];

  return (
    <div>
      {componentes}
      <div>--------------------------------</div>
      {
        users
          .filter(u => u === 'Juanmi')
          .map(u => <TestComponent user={u} />)
      }
    </div>
  );
}

// forEach
// map
// reduce

const array = [0, 1, 3, 4];
const [primerIndice, ...restoIndeces] = array;

const user = {
  name: 'Juanmi',
  apellido: 'Hidalgo'
};

const user2 = { ...user, name: 'Carmen' };

const funcionConSpread = (...params) => {
  console.log(params);
}

funcionConSpread(1);
funcionConSpread(1, 2);
funcionConSpread(1, 2, 3);

export default App;
