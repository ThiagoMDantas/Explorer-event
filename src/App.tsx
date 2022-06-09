import { Atom } from 'phosphor-react';
import { useState } from 'react';
import './orb.scss'

export function App() {
  

  //looping para retornar os pixels
  let numrows = [];
  for (let i = 0; i < 700; i++) {
    numrows.push(i);
  }

  const[text, setText] = useState('');


  return (
    

    <div className="App">
      <div className='m-48 border-none p-10 mx-48 bg-transparent pt-40'>
        
        
        <div className='wrap'>
        {Object.entries(numrows).map(() => {
          return <div className='c'/>
        })} 
        </div>

        <div className='flex flex-col items-center group mt-48'>
          <h1 className='text-white text-4xl font-bold pb-2'>Vou revelar seu destino!</h1>
          <p className='text-orange-50 text-sm pb-2'>Clique em fazer pergunta para que seu destino seja revelado.</p>
          
          <input type="text" placeholder="Digite sua pergunta" 
            className="text-center p-2 m-4 min-w-full w-full min-h-[3rem] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-300 bg-transparent rounded-md focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none ring-1 ring-offset-1 outline-none ring-offset-violet-600 focus:ring-violet-500"
            onChange={event => setText(event.target.value)}
          />
          
          <button
            disabled={text.length == 0}
            className="min-w-full w-full min-h-[3rem] p-2 bg-[#7f00ff] text-white rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-[#7f00ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#7f00ff]  transition-colors disabled:opacity-50 disabled:hover:bg-[#7f00ff]"
            >Fazer Pergunta</button>
        </div>
      </div>

    </div>
  )
}

