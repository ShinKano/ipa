import React, { useState, useEffect }from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import samples from './wordSample';
import wordTable from './wordTable';
import WordsWith from './WordsWith';
import Ipa_vs from './Ipa_vs';
import ControlButton from './ControlButton';


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

  const plusIndex =()=> {
    if(topickIndex == samples.length - 1) {
      return
    } else {
      setTopicIndex(topickIndex + 1)
    }
  };
  const minusIndex =()=> {
    if(topickIndex == 0) {
      return
    } else {
      setTopicIndex(topickIndex - 1)
    }
  };

  return (
    <div className="main">
      <TransitionGroup component="div" className="ipa-topic">
        <CSSTransition classNames="topic" key={currentTopic} timeout={{enter:250, exit:250}}>
          <h1>{currentTopic}</h1>
        </CSSTransition>
      </TransitionGroup>

      <ControlButton
        plusIndex={plusIndex}
        minusIndex={minusIndex}
      />

      <WordsWith 
        currentTopic={currentTopic}
        wordsWith={ipas[topickIndex][currentTopic]}
      />

      <Ipa_vs 
        currentTopic={currentTopic}
        wordsWith={ipas[topickIndex]['vs']}
      />
      

    </div>
  )
};

export default App;
