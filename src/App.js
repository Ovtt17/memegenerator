import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const [lines, setLines] = useState({
    line1: '',
    line2: '',
  });

  const [image, setImage] = useState('');
  
  const onChangeLine = (line) => (e) => {
    setLines({
      ...lines,
      [line]: e.target.value
    });
  };

  const onChangeImage = (e) => {
    setImage(e.target.value);
  }

  const exportImage = (e) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");

      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }
  return (
    <div className="App">
      <div className='controllers'>
      <select onChange={onChangeImage} className='image-selector'>
        <option value="fire">House Burning</option>
        <option value= "futurama">Futurama</option>
        <option value= "history">History Channel</option>
        <option value= "matrix">Matrix</option>
        <option value= "philosoraptor">Philosoraptor</option>
        <option value= "smart">Smart Guy</option>
      </select> <br/>

      <input onChange={onChangeLine('line1')} type='text' placeholder='Linea 1'/> <br/>
      <input onChange={onChangeLine('line2')} type='text'placeholder='Linea 2'/> <br/>
      <button onClick={exportImage}>Export</button>
      </div>

      <div className='meme' id='meme'>
        <span>{lines.line1}</span> <br/>
        <span>{lines.line2}</span> <br/>
        <img src={"/img/" + image + ".jpg"}/>
      </div>
    </div>
  );
}

export default App;
