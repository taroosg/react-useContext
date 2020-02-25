import React, { createContext, useState } from 'react';

// 第一引数に初期値，第2引数に更新用の関数を渡す
export const FontContext = createContext([
  { size: 0, color: '#FFFFFF' },
  () => { }
]);

export const FontContextProvider = props => {
  const [value, setValue] = useState({
    size: 16,
    color: '#FF0000'
  });

  return (
    // useState関連の値をcontextのvalueに設定
    // useStateで使う値をcontextの値として使用している
    <FontContext.Provider value={[value, setValue]}>
      {props.children}
    </FontContext.Provider>
  );
}