import React, { useState } from 'react';

function Login() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const handleInputOneChange = (event) => {
    setInputOne(event.target.value);
  };

  const handleInputTwoChange = (event) => {
    setInputTwo(event.target.value);
  };

  const handleFirstButtonClick = () => {
  };

  const handleSecondButtonClick = () => {
  };

  return (
    <div>
      <h2>User Input Page</h2>
      <div>
        <label>
          Input One:
          <input type="text" value={inputOne} onChange={handleInputOneChange} />
        </label>
      </div>
      <div>
        <label>
          Input Two:
          <input type="text" value={inputTwo} onChange={handleInputTwoChange} />
        </label>
      </div>
      <div>
        <button onClick={handleFirstButtonClick}>First Button</button>
        <button onClick={handleSecondButtonClick}>Second Button</button>
      </div>
    </div>
  );
}

export default Login;
