import React, { useState } from 'react'
import pay from '../images/pay.png'
import Nclock from '../icons/nclock.png'

function Form() {
    const [selectedOption, setSelectedOption] = useState('option2');
    const [value, setValue] = useState(179)
    const limitedOffer = 18500 - value
    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(event.target.value);
        switch (value) {
            case 'option2':
                setValue(179);
                break;
            case 'option3':
                setValue(149);
                break;
            case 'option4':
                setValue(99);
                break;
            default:
                break;
        }
    };
    return (
        <form action="#" className='bg-white rounded-lg space-y-2 py-4 px-6'>
            <div className='flex justify-around font-roboto px-4 text-sm'>
                <div className='flex flex-col items-center justify-center'>
                    <button className='w-6 items-center justify-center text-white rounded-full font-bold text-base  bg-[#0096FF]'>1</button> <span>Sign up</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <button className='w-6 items-center justify-center rounded-full text-white font-bold text-base  bg-[#0096FF]'>2</button> <span>Subscribe</span>
                </div>
            </div>
            <h1 className='text-lg font-relway items-center text-center font-bold'>Select your subcription plan</h1>

            <div className='flex flex-col gap-2 '>
                <label className="inline-flex relative justify-between  px-4 py-2 w-[400px] rounded-md bg-[#BEBEBE] opacity-60 border-2 border-gray-500 items-center">

                    <span className="text-gray-500 font-bold  cursor-not-allowed">
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            disabled
                            className="mr-2 w-4 h-4 border-none  outline-none accent-gray-500"
                        />
                        12 Months Subscription </span>
                    <span className='absolute top-0 left-10 bg-red-500 text-[13px] text-white rounded-b-lg px-6'>Offer expired</span>
                    <div className='flex flex-col  items-center'>
                        <span className="text-gray-500 text-sm flex items-center cursor-not-allowed">Total <span className='text-[17px] ml-1'> ₹99</span>
                        </span>
                        <span className='text-[12px] text-gray-500'>
                            ₹8 /mon
                        </span>
                    </div>
                </label>

                <label className={`relative flex border-2 justify-between px-4 py-1 w-[400px] rounded-md  opacity-60 border-gray-500 items-center ${selectedOption === 'option2' ? 'bg-green-200 border border-green-500' : 'border-gray-500'}`}>
                    <span className='font-bold '>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            className="mr-2  accent-green-500 w-4 h-4  border-none outline-none "
                        />
                        12 Months Subscription </span>
                    <span className='absolute top-0 left-10 bg-green-500 text-[13px] text-white rounded-b-lg px-6'>Recommended</span>
                    <div className='flex flex-col items-center'>
                        <span className=" text-sm flex items-center cursor-not-allowed">Total <span className='text-xl font-bold ml-1'> ₹179</span>
                        </span>
                        <span className='text-[12px] '>
                            ₹15 /mon
                        </span>
                    </div>
                </label>

                <label className={`relative flex border-2 justify-between px-4 py-1 w-[400px] rounded-md  opacity-60 border-gray-500 items-center ${selectedOption === 'option3' ? 'bg-green-200 border border-green-500' : 'border-gray-500'}`}>
                    <span className='font-bold '>
                        <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                            className="mr-2  accent-green-500 w-4 h-4  border-none outline-none "
                        />
                        6 Months Subscription</span>
                    <div className='flex flex-col items-center'>
                        <span className=" text-sm flex items-center cursor-not-allowed">Total <span className='text-xl font-bold ml-1'> ₹149</span>
                        </span>
                        <span className='text-[12px] '>
                            ₹25 /mon
                        </span>
                    </div>
                </label>

                <label className={`relative flex border-2 justify-between px-4 py-1 w-[400px] rounded-md  opacity-60 border-gray-500 items-center ${selectedOption === 'option4' ? 'bg-green-200 border border-green-500' : 'border-gray-500'}`}>
                    <span className='font-bold '>
                        <input
                            type="radio"
                            value="option4"
                            checked={selectedOption === 'option4'}
                            onChange={handleOptionChange}
                            className="mr-2  accent-green-500 w-4 h-4  border-none outline-none "
                        />
                        3 Months Subscription</span>
                    <div className='flex flex-col items-center'>
                        <span className=" text-sm flex items-center cursor-not-allowed">Total <span className='text-xl font-bold ml-1'> ₹99</span>
                        </span>
                        <span className='text-[12px] '>
                            ₹33 /mon
                        </span>
                    </div>
                </label>
            </div>
            <div className='flex justify-between px-5 border-t py-1 border-t-gray-300'>
                <span className='font-roboto text-[#3C4852] text-[16px]'>Subscription Fee</span>
                <span className='font-semibold'>₹18,500</span>
            </div>
            <div className='px-6  border-2 border-red-400 rounded-lg bg-red-200'>
                <span className='flex justify-between font-semibold text-[#DE4313]'>
                    Limited time offer
                    <span className='text-slate-600'>
                        - ₹{limitedOffer}
                    </span>
                </span>
                <span className='flex items-center'>
                    <img src={Nclock} alt='img' className='h-4 mr-2 text-[#DE4313]' />
                    <h1 className='text-[#DE4313] text-[13px]'> Offer valid till 25th March 2023 </h1>
                </span>
            </div>
            <div className='px-6 flex justify-between'>
                <h1 className='text-[14px] text-gray-600'><span className='font-semibold'>Total</span> (Incl. of 18% GST)</h1>
                <h1 className='text-[15px] font-semibold'>₹{value}</h1>
            </div>
            <div className='flex gap-3 justify-around'>
                <button className='upprecase w-[50%] py-2 border-2 rounded-md border-[#F77171]' >cancel</button>
                <button className='upprecase w-[50%] py-2 text-white border-2 rounded-md bg-[#47BA68]  border-[#47BA68]'>proceed to pay</button>
            </div>
            <img src={pay} alt="payment" className='h-7' />
        </form>
    )
}

export default Form
