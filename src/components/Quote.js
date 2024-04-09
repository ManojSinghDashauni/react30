import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../slices/quoteSlice';

const Quote = () => {
    const dispatch = useDispatch();
    const quote = useSelector((state) => state.quote);
    const status = useSelector((state) => state.status);
    useEffect(()=>{
        dispatch(fetchRandomQuote());
    },[dispatch]);
    const handleFetchQuote= () => {
        dispatch(fetchRandomQuote());
    }
  return (
    <div>
        <div className='w-full bg-cyan-400 h-auto font-semibold p-4'>
            {
                status === "loading" ? (
                    <span>loading...</span>
                ):null
            }
            {quote && status !== "loading" ? <div>{quote.content}</div> : null}
        </div>
        <button className='bg-cyan-200 h-8 w-48 rounded-lg m-8 hover:bg-cyan-400' type='button' onClick={() => handleFetchQuote()}><span>Generate Quote</span></button>
    </div>
  );
};

export default Quote