import './App.css';

function App() {
  return (
    <div className="App">
      <h1>E-Attendance</h1>
      <form>
          <div className="form-group"> 
            <label for="name">Name</label>
            <input 
              type='text'
              name='name'
              id="name"
            />
          </div>
          <div className="form-group"> 
            <label for="email">Email</label>
            <input 
              type='email'
              name='email'
              id="email"
            />
          </div>
          <div className="form-group"> 
            <label for="state">State</label>
            <input 
              type='text'
              name='state'
              id="state"
            />
          </div>
          <div className="form-group"> 
            <label for="statecode">Statecode</label>
            <input 
              type='text'
              name='statecode'
              id="statecode"
            />
          </div>
          <div className="form-group"> 
            <label for="lga">L.G.A</label>
            <input 
              type='text'
              name='lga'
              id="lga"
            />
          </div>
          <div className="form-group"> 
            <label for="ppa">Place of Primary Assignment (P.P.A)/label>
            <input 
              type='text'
              name='lga'
              id="lga"
            />
          </div>
      </form>
    </div>
  );
}

export default App;
