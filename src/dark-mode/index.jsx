import { createContext, Suspense, useContext, useDebugValue, useDeferredValue, useRef, useState } from 'react';
import './styles.css';
import SearchResults from './search-results';
import CustomInput from './custom-input';

const ThemeContext = createContext('light');

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}


export const  DarkMode=() =>{
  const [theme, setTheme] = useState('light');
// useDebugValue(theme==='dark' ? 'Online' : 'Offline',()=>setTheme('black'));
  const [query, setQuery] = useState('');
    const defQuery=useDeferredValue(query)

    const ref=useRef();
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </Button>
      <br></br>
        <label style={{color:'white'}}>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2 style={{color:'white'}} >Loading...</h2>}>
        <SearchResults query={defQuery} />
      </Suspense>

      <CustomInput ref={ref} />
      <button onClick={()=>ref.current.focus()} >click</button>
    </>
  )
}
