import Image from 'next/image'
import JibCard from './JibCard'
import React from 'react';
import JibButton from './Button';
import logoJB from '../public/img/Logo-wide.png';
const CTA: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl justify-items-center">
            <JibCard>
                <div className="grid grid-cols-1 justify-items-center py-8">
                    <Image
                        src={logoJB}
                        width={116}
                        height={48}
                        alt='JB'
                        className='m-4'
                    />

                    <div className='text-4xl text-white p-4'>
                    Code the New Paradigm
                    </div>
                    <div className='text-lg text-secondary-100 p-4 pb-8'>
                    Architect the future of decentralized finance and tokenized economies. 
                    Our developer tools empower you to craft groundbreaking blockchain solutions.
                    </div>
                    
                    <JibButton text='Craft Contracts Now'/>
                </div>
                

            </JibCard>
        </div>
    </div>
  );
};

export default CTA;
