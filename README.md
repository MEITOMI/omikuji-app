import React, { useState } from 'react';
import './App.css';

function App() {
  const omikujiList = [
    { text: '大吉', emoji: '🎉' },
    { text: '中吉', emoji: '😊' },
    { text: '小吉', emoji: '🙂' },
    { text: '吉', emoji: '😄' },
    { text: '末吉', emoji: '🤞' },
    { text: '凶', emoji: '😢' },
    { text: '大凶', emoji: '😱' },
  ];
  const rarePoop = { text: 'うんち', emoji: '💩' };

  const [name, setName] = useState('');
  const [result, setResult] = useState({ text: '今日の運勢を占ってみよう！', emoji: '' });

  const getColor = (text) => {
    if (text === '大吉') return 'red';
    if (['中吉', '吉', '小吉', '末吉'].includes(text)) return 'orange';
    if (['凶', '大凶'].includes(text)) return 'blue';
    if (text === 'うんち') return 'brown';
    return 'black';
  };

  const drawOmikuji = () => {
    const random = Math.random();
    if (random < 0.01) {
      setResult(rarePoop);
    } else {
      const randomIndex = Math.floor(Math.random() * omikujiList.length);
      setResult(omikujiList[randomIndex]);
    }
  };

  return (
    <div className="App">
      <h2>あなたの名前を入力してね：</h2>
      <input
        type="text"
        placeholder="例：めい"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={drawOmikuji}>おみくじを引く</button>

      <h1 style={{ color: getColor(result.text), marginTop: '30px' }}>
        {result.emoji} {name ? `${name}さんの運勢は → ${result.text}` : result.text}
      </h1>
    </div>
  );
}

export default App;
