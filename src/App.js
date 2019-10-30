import React from 'react';

import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import StateClassComponent from './StateClassComponent';

const App = () => {
  const users = [
    'Juanmi',
    'Isma',
    'Erik'
  ];

  // ESTO NO SE HACE ASÍ
  //const users = fetch('/api/user');

  const componentes = [
    <FunctionComponent user='Juanmi' />,
    <FunctionComponent user='Isma' />,
    <FunctionComponent user='Erik' />,
  ];

  return (
    <div>
      {componentes}
      <div>--------------------------------</div>
      {
        users
          .filter(u => u === 'Juanmi')
          .map(u => <FunctionComponent user={u} />)
      }
      <div>--------------------------------</div>
      <ClassComponent user={'Erik'} />
      <div>--------------------------------</div>
      <StateClassComponent />
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
