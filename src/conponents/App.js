import React, { useState, useEffect }from 'react';
import samples from './wordSample';
import wordTable from './wordTable';
import WordsWith from './WordsWith';

const App =(props)=> {

  const [topickIndex, setTopicIndex] = useState(0);
  const [ipas, setIpas] = useState(samples);
  const [currentTopic, setCurrentTopic] = useState(null);
  
  useEffect(() => {
    setCurrentTopic(pickTopic(topickIndex));
  }, [topickIndex]);

  const pickTopic =(topickIndex)=> {
    return Object.keys(ipas[topickIndex])[0];
  };


  console.log(ipas[topickIndex][currentTopic]);

  return (
    <div className="main">
      <div className="ipa-topic"><h1>{currentTopic}</h1></div>

      <WordsWith 
        currentTopic={currentTopic}
        wordsWith={ipas[topickIndex][currentTopic]}
      />

      <div className="ipa-vs">
        <h3 className="ipa-vs-title">Words with æ</h3>
          <ul className="ipa-vs-contents">
            <li>cat / cut</li>
            <li>cat / cut</li>
            <li>cat / cut</li>
          </ul>
      </div>

    </div>
  )
};

export default App;
