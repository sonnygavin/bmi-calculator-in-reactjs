import './App.css';
import React, {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let imgSrc = '';

  let handleSubmit = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      setMessage('Please enter a valid weight and height!');
    } else {
      let bmi = (weight/(height*height))
      setBmi(bmi.toFixed(1))

      if (bmi < 18.5) {
        setMessage("You're underweight!")
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You're normal weight!")
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("You're overweight!")
      } else {
        setMessage("You're obese!")
      }
    }
  }

  if (bmi < 1) {
    imgSrc = ''
  } else {
    if (bmi < 18.5) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      imgSrc = require('../src/assets/healthy.png')
    } else if (bmi >= 25 && bmi <= 29.9) {
      imgSrc = require('../src/assets/obese.png')
    } else {
      imgSrc = require('../src/assets/obese.png')
    }
  }

  let handleClear = () => {
    setWeight(0)
    setHeight(0)
    setBmi(0)
    imgSrc = ''
    return;
  }

  return (
    <div className="App">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn btn-outline' type='submit' onClick={handleClear}>Clear</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;
