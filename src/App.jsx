import React, { useState, createContext } from 'react';
// import Text from './components/Text';
import { FontContextProvider } from './contexts/FontContext';

import TextSizeForm from './components/TextSizeForm';
import TextColorForm from './components/TextColorForm';
import ViewText from './components/ViewText';

// これが子コンポーネントから呼ばれる
// 第2引数に更新用の関数を入れられるようにする
export const FontContext = createContext([{ size: 0, color: 'red' }, () => { }]);

const App = () => {
  return (
    <>
      <FontContextProvider>
        <ViewText />
        <TextColorForm />
        <TextSizeForm />
      </FontContextProvider>
    </>
  );
}
export default App;
