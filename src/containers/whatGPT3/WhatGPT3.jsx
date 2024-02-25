import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'
function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text='GPT-3, short for "Generative Pre-trained Transformer 3," is a state-of-the-art language processing model developed by OpenAI. '/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>Possibilities are beyong your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbots' text='Chatbots are computer programs designed to simulate conversation with human users, typically through text-based or voice-based interfaces.'/>
        <Feature title='knowledgebase' text=' can enhance learning experiences by providing personalized tutoring, answering students'/>
        <Feature title='Education' text=' leverage machine learning algorithms and natural language understanding to learn from interactions and improve their responses over time. '/>
      </div>
    </div>
  )
}

export default WhatGPT3