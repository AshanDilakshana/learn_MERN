import './App.css'
import ProductCard from './components/productcard.jsx'



function App() {
  
  return ( 
    <>
    <h1 className='text-red-500 text-5xl'>wellcome ashan new project</h1>
    <ProductCard name = "apple i phone" price = "$200" image = "https://i0.wp.com/gearz.lk/wp-content/uploads/2024/09/iPhone-16-_-iPhone-16-Plus_Pink_1.webp?fit=700%2C800&ssl=1" />
    <ProductCard />
        <div className='h-[700px] w-[700px] border-[5px] bg-amber-200 relative flex flex-row justify-center items-center'>


          <div className='h-[200px] w-[400px] bg-blue-500 relative'>
            <h1 className='text-white text-4xl f '> Your time is over</h1>
            <button className='bg-red-500 absolute top-[0px] right-[0px]'>X</button>

          </div>


          
          
          
        </div>

    </>
   )
}
export default App
