import React, { useContext } from 'react';
import { FontContext } from '../App';

const Text = () => {
  // 親コンポーネントのFontContextのvalue（ここではsizeの値とsetSize関数）が取得できる
  // 配列で渡されているので，配列で受け取らないとエラーになる
  const [value, setValue] = useContext(FontContext);

  const updateHandler = e => {
    // stateは過去分もまとめて全部更新する必要がある
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: `${value.size}px`, color: `${value.color}` }}>
        FONT SIZE {value.size}px
      </h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="color"
          value={value.color}
          name="color"
          onChange={e => updateHandler(e)}
        />
      </form>
    </div>
  );
}

export default Text;
