import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'welcome-screen'}>
    <img src="https://image-resource.creatie.ai/157237976852160/157237976852162/a2f82a0bdf274f7f2006e1f7594309ae.png" className={'sb'} />
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
            <svg id="2:0328" className={'nav-dots'}></svg><svg id="2:0323" className={'next-button'}></svg>
        </div>
    </div>
</div>
);
};
export default Root