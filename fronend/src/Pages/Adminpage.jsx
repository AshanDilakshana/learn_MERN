import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function Adminpage() {

    return(
        <div className="w-full h-full bg-red-300 flex">
            <div className="w-[300px] h-full bg-secondary ">

            </div>
            
            <div className='w-[calc(100%-300px)] h-full border-[2px] bg-background'>
            <Routes parth="/">
                <Route path='/' element={<h1>dashboard</h1>} />
                <Route path='/products' element={<h1>Products</h1>} />
                <Route path='/orders' element={<h1>Orders</h1>} />
                <Route path='/*' element={<h1>NOT FOUND 404</h1>} />


            </Routes>
            </div>
        </div>
    )
}
