import React, { useState, useEffect }from 'react';

const WordsWith =(props)=> {
    // console.log(Object.keys(props.wordsWith));

    const words = [];
    for(var key in props.wordsWith) {
        words.push(key);
    }
    console.log('keys:', words);

    return (
        <div className="words-with">
            <h3 className="words-with-title">Words with {props.currentTopic}</h3>
            <div className="flex-parent">
                <ul className="words">
                    {words.map(key => <li key={key}>{key}</li>) }
                </ul>
                <ul className="words-ipa">
                    {words.map(key => <li key={props.wordsWith[key]}>{props.wordsWith[key]}</li>) }
                </ul>
            </div>
        </div>
    );
};

export default WordsWith;
