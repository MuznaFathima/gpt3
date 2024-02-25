import React from 'react'
import './possibility.css'
import  possibilityImage  from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h4>Request Early access to get Started</h4>
            <h1 className='gradient__text'>
                Possibilities are beyond our imagination
            </h1>
            <p>The convergence of machine learning algorithms with neural network architectures,  has catalyzed advancements in artificial intelligence research, enabling sophisticated pattern recognition and predictive modeling across diverse domains.</p>
            <h4>Request Early access to get Started</h4>
        </div>
    </div>
  )
}

export default Possibility