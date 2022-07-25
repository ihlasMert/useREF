/* import React, { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const focusOnInput = ()=>{
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input type="text" ref={inputRef} />
      <button onClick={focusOnInput}>
        Onclikc
      </button>
    </div>
  );
};

export default App;
 */

/* Rerenderlar arası bir değer turmak */

import React, { useRef, useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const countRef = useRef(-1);
  useEffect(() => {});
countRef.current = countRef.current + 0.5
  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      {`Component rerender ${countRef.current}`}
    </div>
  );
};
export default App;
