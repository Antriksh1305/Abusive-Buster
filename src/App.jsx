import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// components
import Modal from './components/Modal';
import Developers from './components/developers';
import TestBox from './components/testBox';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img className='bg' src="/bg.png" alt="background" />
      <div className='main'>
        <div className='upperCont'>
          <div className='cont'>
            <h1>Abusive Buster Chatbot<br /><span style={{ color: '#fff' }}>“PeacePal”</span></h1>
            <p>Discover a safer online environment with our chatbot!
              This chatbot remove abusive language from social sentences, supporting both Hindi and English.
              <span className='d-none d-lg-inline'>Our bot uses Python modules and a set list of abusive words to ensure respectful communication.</span><br /><span style={{ fontWeight: 700, color: '#fff' }}>Join us in promoting positivity online!</span></p>
          </div>
          <TestBox />
        </div>
        <Developers />
      </div>
      {/* Floating Feedback Button */}
      <div className="float-button">
        <div
          className="float-button-text"
          onClick={() => setShowModal(true)}
        >
          Share Feedback
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default App;
