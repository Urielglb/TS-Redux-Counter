import React from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/store'
import { increment, decrement } from '../store/counterSlice';

export default ()=>{
    
    const count = useAppSelector(state => state.counter.value);

    const dispatch = useAppDispatch();

    return(
        <div>
            <h3>El valor del counter es:</h3>
            <h3>{count}</h3>
            <div className="container-fluid d-flex flex-row justify-content-around">
                <input type="button" className='fw-bold text-white bg-primary border rounded-circle px-2' onClick={()=>dispatch(decrement())} value="-" />
                <input type="button" className='fw-bold text-white bg-primary border rounded-circle px-2' onClick={()=>dispatch(increment())} value="+" />
            </div>
        </div>
    )
    



}