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
            <label for="name">Name</label>
            <input 
              type='text'
              name='name'
              id="name"
            />
          </div>
          <div className="form-group"> 
            <label for="name">Name</label>
            <input 
              type='text'
              name='name'
              id="name"
            />
          </div>
      </form>
    </div>
  );
}

export default App;
