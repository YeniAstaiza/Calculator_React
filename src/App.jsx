import { useState } from 'react';
import Button from './components/Button'
import { LuDelete } from 'react-icons/LU';




const App = () => {
  const [data,setData] = useState ({anterior: 0, actual: '', operacion: ''})

  const signoOperacion = (event) => {
    if(data.anterior === 0 ){
      data.anterior = data.actual
      data.actual = ''
    } else if  (data.operacion === '%'){
      data.actual = data.anterior
    } else if  (data.actual === ''){
      data.actual = 0
    } 
     else {
    switch(event){
      case '+':  
        data.anterior = parseFloat(data.anterior) + parseFloat(data.actual)
        data.actual = ''
     break;
     case '-':  
        data.anterior = parseFloat(data.anterior) - parseFloat(data.actual)
        data.actual = ''
     break;
     case '*':  
        data.anterior = parseFloat(data.anterior) * parseFloat(data.actual)
        data.actual = ''
     break;
     case '/':   
      data.anterior = parseFloat(data.anterior) / parseFloat(data.actual)
      data.actual = ''
     break;
     case '%':  
     data.actual = parseFloat(data.anterior) * parseFloat(data.actual / 100);
      
     break;
     default: alert("agrega un valor");
     break;
    }
  }
  
    setData({
      ...data,
      operacion: event
    })

}

const borrarAdd = () =>{
  setData({...data, actual: 
    data.actual.slice
    (0, data.actual.length -1)})
}

const clearAll = () =>{
  setData({anterior: 0, actual: '', operacion: ''})
}

const agregarNumero = (event) =>{
  if (data.actual.length >= 15) return
  if (event == '.' && data.actual.includes('.')) return
  setData({...data, actual: `${data.actual}` + 
    event})
    console.log(event)
}

const resultado = () =>{
  const newData = data;
  newData.actual = eval(`${data.anterior} ${data.operacion} ${data.actual}`)
   newData.actual = Number(newData.actual.toFixed(2))
  
  setData({...newData})
}



  const calculator = [
    {
      label:'C',
      handleClick: clearAll
    },
    {
      label:'%',
      handleClick: () => signoOperacion ('%')
    },
    {
      label: <LuDelete />,
      handleClick: borrarAdd
    },
    {
      label:'+',
      handleClick: () => signoOperacion ('+')
    },
   
    {
      label:'1',
      handleClick: () => agregarNumero (1)
    },
    {
      label:'2',
      handleClick:  () =>  agregarNumero (2)
    },
    {
      label:'3',
      handleClick:  () =>  agregarNumero (3)
    },
    {
      label:'-',
      handleClick: () => signoOperacion ('-')
    },
    {
      label:'4',
      handleClick:  () => agregarNumero (4)
    },
    {
      label:'5',
      handleClick:  () => agregarNumero (5)
    },
    {
      label:'6',
      handleClick:  () =>  agregarNumero (6)
    },
    {
      label:'*',
      handleClick: () => signoOperacion ('*')
    },
    {
      label:'7',
      handleClick:  () => agregarNumero (7)
    },
    {
      label:'8',
      handleClick:  () => agregarNumero (8)
    },
    {
      label:'9',
      handleClick:  () => agregarNumero (9)
    },
    {
      label:'/',
      handleClick: () => signoOperacion ('/')
    },
    {
      label:'.',
      handleClick:  () => agregarNumero ('.')
    },
    {
      label:'0',
      handleClick:  () => agregarNumero (0)
    },
    {
      label:'=',
      handleClick: () => resultado ('=')
    },
  ]

  const listButtons = calculator.map((sign) =>
  <Button key={sign.label.toString()}
      handleClick={sign.handleClick}> {sign.label}
  </Button>
  );

  return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className="container mx-auto px-10 flex justify-center items-center">
          <div className="box-content  w-60 p-4 border-8 ">
            
            <div className='border border-grqay-800 mb-5 bg-gray-400 rounded-md px-5 py-6 text-gray-80 hover:bg-purple-500 flex flex-col justify-between items-end'>
              <span className='bg-gray-400 text-gray-500'> {data.anterior} {data.operacion}</span>
              <span className='bg-gray-400 text-black-100  font-medium text-3xl'> {data.actual} </span>
            </div> 
            <div className=" grid grid-cols-4 gap-1">
              {listButtons}
            </div>
          </div>
        </div>
      </div>    
  )
}

export default App
