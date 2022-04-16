import React from 'react';
import Count from './component/cnt/Count';
import ChangeColor from './component/color/ChangeColor';
import ChangeColorAdd from './component/color/ChangeColorAdd';
import Color from './component/color/Color';
import ChangeColorProvider from './context/ChangeColorContext';
import ChangeColorProviderAdd from './context/ChangeColorContextAdd';
import ColorProvider from './context/ColorContext';
import CountProvider from './context/CountContext';

const App = () => {
  return (
    <div style={{ margin: 30 }}>
      <CountProvider>
        <Count/>
      </CountProvider>

      <hr/>
      <ColorProvider>
        <Color/>
      </ColorProvider>

      <hr/>
      <ChangeColorProvider>
        <ChangeColor/>
      </ChangeColorProvider>

      <hr/>
      <ChangeColorProviderAdd>
        <ChangeColorAdd/>
      </ChangeColorProviderAdd>
    </div>
  );
};

export default App;