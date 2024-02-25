import React from 'react'
import './features.css'
import { Feature } from '../../components'
function Features() {

   const featuresData=[
    {
        title:'Improving end distrusts instantly',
        text:'The quantum entanglement of subatomic particles within a superconducting, in quantum computing and information processing paradigms. '
    },
    {
        title:'Become the tended active',
        text:'The quantum entanglement of subatomic particles within a superconducting,  in quantum computing and information processing paradigms. '
    },
    {
        title:'Message or am nothing',
        text:'The quantum entanglement of subatomic particles within a superconducting,  applications in quantum computing and information processing paradigms. '
    }, {
        title:'Really boylaw county',
        text:'The quantum entanglement of subatomic particles within a superconducting, in quantum computing and information processing paradigms. '
    }


   ]
  return (


   <div className='gpt3__features section__padding' id='features'>
    <div className="gpt3__features-heading">
        <h1 className='gradient__text'>
            The Future is Now and You Just Need To Realize It.Step into Future Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
    </div>

    <div className="gpt3__features-container">
{featuresData.map((item,index)=>(
    <Feature title={item.title} text={item.text }/>
))}

    </div>
   </div> 
  )
}

export default Features