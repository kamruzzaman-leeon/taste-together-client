import React from 'react';
import CountUp from 'react-countup';

const CountDownItem = () => {
    return (
        <div className='container mx-auto bg-slate-50 p-10 flex justify-around'>
            <div className='card p-10 text-center shadow-lg'>
                <CountUp start={0} end={4200} delay={2}>
                    {({ countUpRef }) => (
                        <div className='text-3xl font-extra text-blue-600'>
                            <span ref={countUpRef} />+
                        </div>
                    )}
                </CountUp>
                Total Food HandOver
            </div>
            <div className='card p-10 text-center shadow-lg'>
                <CountUp start={0} end={3400} delay={2}>
                    {({ countUpRef }) => (
                        <div className='text-3xl font-extrabold text-blue-600'>
                            <span ref={countUpRef} />+
                        </div>
                    )}
                </CountUp>
                Benified Person
            </div>
            <div className='card p-10 text-center shadow-lg'>
                <CountUp start={0} end={5055} delay={2}>
                    {({ countUpRef }) => (
                        <div className='text-3xl font-extrabold text-blue-600'>
                            <span ref={countUpRef} />+
                        </div>
                    )}
                </CountUp>
                Total Quantity
            </div>
            

        </div>
    );
};

export default CountDownItem;