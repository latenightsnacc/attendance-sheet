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
            <label for="phone">Phone</label>
            <input 
              type='tel'
              name='phone'
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
            <label for="lga">Local Government Area (L.G.A)</label>
            <input 
              type='text'
              name='lga'
              id="lga"
            />
          </div>
          <div className="form-group"> 
            <label for="cds">CDS Group</label>
            <select 
              type='text'
              name='cds'
              id="cds">
                <option selected>Select CDS Group</option>
                <option value="ICT">ICT</option>
                <option value="Band">Band</option>
                <option value="Red Cross">Red Cross</option>
                <option value="ICT">ICT</option>
            </select>
          </div>
          <div className="form-group"> 
            <label for="ppa">Place of Primary Assignment (P.P.A)</label>
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
