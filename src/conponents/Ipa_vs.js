import React, { useState, useEffect }from 'react';

const Ipa_vs =(props)=> {
    // console.log(Object.keys(props.wordsWith));

    const words = [];
    for(var key in props.wordsWith) {
        words.push(key);
    }

    return (
        <div className="ipa_vs">
            <h3 className="ipa_vs-title">{props.currentTopic} vs Similer IPAs</h3>
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

export default Ipa_vs;