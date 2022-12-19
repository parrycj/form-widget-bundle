import "./App.css";

function App({ config }) {
  const { params } = config || {};
  const { question, option1, option2, option3 } = params || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The option you selected was: ${e.target[0].value}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>{question}</label>
          <br></br>
          <select>
            <option value={option1}>{option1}</option>
            <option value={option2}>{option2}</option>
            <option value={option3}>{option3}</option>
          </select>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
