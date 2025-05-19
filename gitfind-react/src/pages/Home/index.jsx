import { Header } from '../../components/Header';
import background from '../../assets/githubicon.png';
import ItemList from '../../components/ItemList';
import './style.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const UserData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await UserData.json();

    if(newUser.name) {
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({
        avatar_url,
        name,
        bio,
        login
      });
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      if(newRepos.length) {
        setRepos(newRepos);
      }
    }
  }
   
  return (
   <div className="App">
    <Header />
    <div className="conteudo">
      <img src={background} className='background' alt='backgroundImg'/>
      <div className="info">
        <div>
          <input 
            name="usuario" value={user} 
            onChange={event => setUser(event.target.value)} 
            placeholder='@username' 
          />
          <button onClick={handleGetData}>Buscar</button>
        </div>
        {currentUser && currentUser.name ? (
          <>
          <div className="perfil">
            <img 
              src={currentUser.avatar_url}
              className="profile" 
              alt='Imagem de Perfil'
            />
            <div>
              <h3>{currentUser.name}</h3>
              <span>@{currentUser.login}</span>
              <p>{currentUser.bio}</p>
            </div>
          </div>
          <hr />
          </>
        ) : null}
      </div>
      {repos && repos.length ? (
        <div>
          <h4>Veja os repositórios que {currentUser.name} possui</h4>
          {repos.map((repo) => (
            <ItemList title={repo.name} description={repo.description} />
          ))}
          
        </div>
      ) : null}
    </div>
   </div>
  );
}

export default App
