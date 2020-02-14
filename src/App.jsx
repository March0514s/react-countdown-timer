import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return null;
    }
    return null;
  };
  const handleSubmit = () => console.log('blablabla'); // Replace by HTTP Request to BE;

  return (
    <>
      <div style={{ display: 'flex' }}>
        <aside>
          <header>
            <h1 className="title">
              cl
              <span style={{ color: 'white' }}>
                o
              </span>
              ckr
            </h1>
          </header>
          <article>
            <div>
              <p>Time never stops, neither do you</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugit. Ipsa velit cumque veritatis explicabo fugiat? Temporibus amet placeat ad sed in, animi facilis tempora id reiciendis atque quibusdam aut.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti laborum quasi reiciendis incidunt fugiat voluptas illum praesentium repellat voluptate, deleniti, dolorum corporis neque quia animi mollitia optio exercitationem sed!</p>
            </div>
            <div>
              <p id="next-action">Enter your credentials <i style={{ margin: '0 10px' }}class="fas fa-caret-right"/></p>
            </div>
          </article>
        </aside>
        <div data-testid="container" className="container">
          <form onSubmit={handleSubmit}>
            <p >LOGIN WITH</p>
            <div style={{ display: 'flex', color: 'silver'}}>
              <i class="fab fa-facebook-square fa-3x" style={{ margin: '0 10px' }}></i>
              <i class="fab fa-google fa-3x" style={{ margin: '0 10px' }}></i>
              <i class="fab fa-instagram-square fa-3x" style={{ margin: '0 10px' }}></i>
              <i class="fab fa-twitter-square fa-3x" style={{ margin: '0 10px' }}></i>
            </div>
            <p>-OR-</p>
            <div className="form-container">
              <label htmlFor="username"><i class="fas fa-user fa-3x" style={{ color: 'silver'}}/></label>
              <input type="email" id="username" onChange={handleChange} value={username} />
            </div>
            <div className="form-container">
              <label htmlFor="password"><i class="fas fa-key fa-3x" style={{ color: 'silver'}}/></label>
              <input id="password" type="password" onChange={handleChange} value={password} />
            </div>
          </form>
          {/* Dashboard
          <section className="flex-grow">
            <div style={{ marginBottom: '20px' }}>
              <p style={{ display: 'inline-block', margin: 0, fontWeight: 'bold' }}>ad</p>
              <div className="timer">
                <i className="far fa-clock" />
                <p style={{ display: 'inline-block', margin: '0 10px' }}>Christmas - 220 days 13:02:47</p>
              </div>
            </div>
            <div>
              <p style={{ display: 'inline-block', margin: 0, fontWeight: 'bold' }}>my events</p>
              <div className="timer">
                <i className="far fa-clock" />
                <p style={{ display: 'inline-block', margin: '0 10px' }}>Christmas - 220 days 13:02:47</p>
              </div>
              <div className="timer">
                <i className="far fa-clock" />
                <p style={{ display: 'inline-block', margin: '0 10px' }}>Christmas - 220 days 13:02:47</p>
              </div>
              <div className="timer">
                <i className="far fa-clock" />
                <p style={{ display: 'inline-block', margin: '0 10px' }}>Christmas - 220 days 13:02:47</p>
              </div>
              <div className="timer">
                <i className="far fa-clock" />
                <p style={{ display: 'inline-block', margin: '0 10px' }}>Christmas - 220 days 13:02:47</p>
              </div>
              <div className="timer-finished">
                <i className="far fa-check-circle" />
                <p style={{ display: 'inline-block', margin: '0 10px' }}>Christmas - 220 days 13:02:47</p>
              </div>
            </div>
          </section> */}
          {/* <footer className="footer">
            <p>
              by
              <a href="https://march0514s.github.io/"> @march0514s</a>
            </p>
          </footer> */}
        </div>
      </div>
    </>
  );
};

export default App;
