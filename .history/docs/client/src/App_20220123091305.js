import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [corper, setState] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    statecode: '',
    batch: '',
    cds: '',
    lga: '',
    ppa: '',
    profilePic: []
  });

  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("");

  // const saveFile = (e) => {
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);
  // }
 
  const getDetails = e => {
    setState({
      ...corper,
      [e.target.name]: e.target.value,
      profilePic:e.target.files[0]
    });
  }
  
  const createProfile = async () => {
    const formData = new FormData();
    formData.append('name', corper.profilePic);
    formData.append('email', corper.profilePic);
    formData.append('phone', corper.profilePic);
    formData.append('state', corper.profilePic);
    formData.append('statecode', corper.profilePic);
    formData.append('batch', corper.profilePic);
    formData.append('cds', corper.profilePic);
    formData.append('lga', corper.profilePic);
    formData.append('ppa', corper.profilePic);
    formData.append('profilePic', corper.profilePic);
    try {
      await Axios.post("http://localhost:3030/create", formData, {
        headers: {"Content-Type": "multipart/form-data"}
      }).then((res) => {
        console.warn(res);
        if(res.data.success)
        console.log("Corper's E-Attendance Profile Created.")
      })
    } catch (e) {
      console.log(e);
    }
    
  }
    
  
  return (
    <div className="App bg-gray-50">
      <h1 className='text-4xl text-gray-700'>E-Attendance</h1>
      <form onSubmit={createProfile} className="form">
          <div className="form-group"> 
            <label for="name">Name</label>
            <input 
              type='text'
              name='name'
              id="name"
              value={corper.name}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="email">Email</label>
            <input 
              type='email'
              name='email'
              id="email"
              value={corper.email}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="phone">Phone</label>
            <input 
              type='tel'
              name='phone'
              id="phone"
              value={corper.phone}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="state">State</label>
            <input 
              type='text'
              name='state'
              id="state"
              value={corper.state}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="statecode">Statecode</label>
            <input 
              type='text'
              name='statecode'
              id="statecode"
              value={corper.statecode}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="batch">Batch</label>
            <input 
              type='text'
              name='batch'
              id="batch"
              value={corper.batch}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="lga">Local Government Area (L.G.A)</label>
            <input 
              type='text'
              name='lga'
              id="lga"
              value={corper.lga}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="cds">CDS Group</label>
            <select 
              type='text'
              name='cds'
              id="cds"
              value={corper.cds}
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
              value={corper.ppa}
              onChange={getDetails}
            />
          </div>
          <div className="form-group"> 
            <label for="profilePic">Profile Picture</label>
            <input 
              type='file'
              name='profilePic'
              id="profilePic"
              value={corper.profilePic}
              onChange={getDetails}
            />
          </div>
          <button className='btn' type="submit" >Create Profile</button>
      
      
      </form>
      
    </div>
  );
}

export default App;
