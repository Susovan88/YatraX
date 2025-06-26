import React from 'react';
import "./Welcome.css"

const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'welcome-screen'}>
    <img src="https://image-resource.creatie.ai/157237976852160/157237976852162/a2f82a0bdf274f7f2006e1f7594309ae.png" 
    className={'sb'} />
    <div className={'btm-card'}>
        <div className={'btm-contant'}>
            <div className={'starting-tagline'}>
                <div className={'select-your-destination'}>
                    Select your Destination
                </div>
                <div className={'your-journey-begins-here-book-faster-travel-smarter-explore-beyond-limits'}>
                    Your journey begins here - book faster, travel smarter, explore beyond limits
                </div>
            </div>
            <div className={'nav-dots'}>
                <div className='flex justify-between items-center h-full'>
                    <div className='h-[8px] w-[8px] rounded-full bg-white'></div>
                    <div className='h-[8px] w-[8px] rounded-full bg-white'></div>
                    <div className='h-[8px] w-[8px] rounded-full bg-[#5B5B5B] border border-white'></div>
                </div>
            </div>
            <button className={'next-button'}>
                <div className="next-button bg-[#C0EC4E] static w-[70.62px] h-[47.38px] rounded-[20px] opacity-100 z-[2] flex flex-row justify-center items-center p-[5px_16.62px] gap-0 flex-wrap content-center">
                    <img
                        src="public/ic-sharp-call-made.svg"
                        alt="Next Icon"
                        className="w-full h-full object-contain scale-[2] font-bold"
                    />
                </div>
            </button>

        </div>
    </div>
</div>
);
};
export default Root