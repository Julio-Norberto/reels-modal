import './App.css';

import Modal from './components/Modal/Modal';

function App() {

  function hideOrShowModal(display) {
    const modal = document.querySelector('#modal')
    if(display) {
      modal.classList.remove('hide')
    }
  }

  return (
    <div className="App">
      <Modal />
      <h1>Abrir modal</h1>
      <button onClick={hideOrShowModal}>Clique aqui!</button>
    </div>
  );
}

export default App;
