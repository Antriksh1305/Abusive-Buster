import { useState } from 'react';
import './testBox.css';

// functions
import postAbusiveData from '../firebase/postAbusiveData';

const TestBox = () => {
    const [sentence, setSentence] = useState('');
    const [original, setOriginal] = useState('');
    const [result, setResult] = useState('');
    const [warning, setWarning] = useState(false);

    // MODEL API URL
    const MODEL_API_URL = import.meta.env.VITE_MODEL_API_URL;

    const handleCheck = async () => {
        if (!sentence) {
            setWarning('Please enter a sentence to check');
            return;
        }
        try {
            const response = await fetch(MODEL_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sentence: sentence })
            });
            if (!response.ok) {
                setWarning('An error occurred. Please try again later.');
            }
            const data = await response.json();
            const text = JSON.parse(data.body).cleaned_sentence;
            setOriginal(sentence);
            setResult(text);
            postAbusiveData(sentence, text);
            setSentence('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='test-box'>
            <h2>Test the Chatbot</h2>
            <p>Enter a sentence to check for abusive language:</p>
            <input
                type='text'
                className='form-control'
                placeholder='Enter your sentence here'
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                onFocus={() => setWarning(false)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleCheck();
                    }
                }}
            />
            {warning && <p className='warning' style={{ color: 'red', fontSize: '14px' }}>{warning}</p>}
            {
                result && (
                    <div className="result-display">
                        <p className="response">The original sentence is: {original}</p>
                        <p className="response">The cleaned sentence is: {result}</p>
                    </div>
                )
            }
            <button className='btn btn-primary' onClick={handleCheck}>Check</button>
        </div>
    );
};

export default TestBox;
