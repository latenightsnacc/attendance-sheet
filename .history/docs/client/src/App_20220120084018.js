import './App.css';
import {useState} from 'react';

function App() {
  const [corper, setState] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    statecode: '',
    cds: '',
    lga: '',
    ppa: ''
  });

  const getDetails = e => {
    setState({
      ...corper,
      [e.target.name]: e.target.value
    });
  }
  const viewDetails = e => {
    e.preventDefault();
    console.log(corper)
  }
  return (
    <div className="App">
      <h1>E-Attendance</h1>
      <form className="form" onSubmit={viewDetails}>
          <div className="form-group"> 
            <label for="name">Name</label>
            <input 
              type='text'
              name='name'
              id="name"
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="email">Email</label>
            <input 
              type='email'
              name='email'
              id="email"
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="phone">Phone</label>
            <input 
              type='tel'
              name='phone'
              id="phone"
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="state">State</label>
            <input 
              type='text'
              name='state'
              id="state"
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="statecode">Statecode</label>
            <input 
              type='text'
              name='statecode'
              id="statecode"
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="lga">Local Government Area (L.G.A)</label>
            <input 
              type='text'
              name='lga'
              id="lga"
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="cds">CDS Group</label>
            <select 
              type='text'
              name='cds'
              id="cds"
              onChange={getDetails}>
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
              name='ppa'
              id="ppa"
              onChange={getDetails}
            />
          </div>
          <button className='btn' type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default App;
