import React from 'react';

type Props = {};

const Header: React.FC<Props> = () => {
    return (
        <>
            <header className='p-5 flex justify-between -mb-5'>
                <div className='flex'>
                    <img alt='avatar' src={process.env.PUBLIC_URL + '/assets/avatar.png'} className='w-10 h-10' />
                    <div className='flex flex-col ml-5 space-y-[2px]'>
                        <h1 className='text-xl font-semibold'>Melani Tan <i className="fa-solid fa-circle-check text-lg text-sky-300"></i></h1>
                        <h2>Professional Food Photographer</h2>
                        <div className='flex items-center space-x-2 font-normal'>
                            <div className='flex items-center'>
                                <i className="fa-solid fa-location-dot mr-1.5 text-oren"></i>
                                <span>Bangkok</span>
                            </div>
                            <div className='flex items-center'>
                                <i className="fa-solid fa-envelope mr-1.5 text-oren"></i>
                                <span>melanietan99@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <i className="fa-solid fa-bars text-xl text-sky-300"></i>
            </header>
        </>
    );
}

export default Header;