import React, { useContext } from 'react';
import { FontContext } from '../contexts/FontContext';

const TextSizeForm = () => {
  // FontContextから渡された値と関数を取り出す
  // 親コンポーネントのsetStete関連で使用する値が渡されてくる
  // なので，ここでの使い方はuseStateと同様
  const [value, setValue] = useContext(FontContext);

  const updateHandler = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="number"
          name="size"
          value={value.size}
          onChange={e => updateHandler(e)}
        />
      </form>
    </>
  );
}
export default TextSizeForm;