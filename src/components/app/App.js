import './App.scss';

import Menu from '../menu/Menu';
import Sound from '../Sound/Sound';
import Introduce from '../introduce/Introduce';

function App() {
  return (
    <div className="App">
      <Menu />

      <div className='app_content'>
        <Sound />
        <Introduce />
      </div>
    </div>
  );
}

export default App;
