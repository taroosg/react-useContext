import React, { useContext } from 'react';
import { FontContext } from '../contexts/FontContext';

const ViewText = () => {
  // FontContextから渡された値と関数を取り出す
  // 親コンポーネントのsetStete関連で使用する値が渡されてくる
  // なので，ここでの使い方はuseStateと同様
  const [value, setValue] = useContext(FontContext);
  return (
    <div style={{ fontSize: `${value.size}px`, color: `${value.color}` }}>
      <p>Size: {value.size}px</p>
      <p>Color: {value.color}</p>
    </div>
  );
}

export default ViewText;