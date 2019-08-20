import React, { useState, useEffect }from 'react';

const ControlButton =(props)=> {
    return (
        <div className="control-button">
            <input type="button" value="prev" name="prev"
                onClick={props.minusIndex}
            />
            <input type="button" value="next"
                onClick={props.plusIndex}
            />
        </div>
    )
};

export default ControlButton;