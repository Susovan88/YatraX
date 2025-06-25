import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'profile-page'}>
    <div className={'background-color-splash'}>
    </div>
    <div className={'nav-bar'}>
        <svg id="2:017039" className={'home-icon'}></svg><svg id="135:11972" className={'ticket-icon'}></svg><svg id="2:059690" className={'journey'}></svg>
        <div className={'profile-exp'}>
            <div className={'profile'}>
                Profile
            </div>
            <svg id="2:017043" className={'user-line'}></svg>
        </div>
    </div>
    <div className={'user-name--img'}>
        <div className={'hi-subhadip'}>
            <div><span>Hi, </span><span>Subhadip</span></div>
        </div>
        <div className={'profile-photo'}>
            <img src="https://image-resource.creatie.ai/157237976852160/157237976852162/0e8a74107ef1ce437b1e18a0d0b75a4f.jpg" className={'image'} />
        </div>
    </div>
    <div className={'settings-list'}>
        <div className={'general'}>
            General
        </div>
        <div className={'personal-information-list'}>
            <div className={'list'}>
                <svg id="2:073319" className={'icon'}></svg>
                <div className={'alice-williams'}>
                    Alice Williams
                </div>
            </div>
            <div className={'list-1'}>
                <svg id="2:073327" className={'icon-1'}></svg>
                <div className={'alicewilliamsexamplecom'}>
                    alice.williams@example.com
                </div>
            </div>
            <div className={'list-2'}>
                <div className={'icon-2'}>
                    <div className={'rectangle'}>
                    </div>
                    <svg id="2:073339" className={'path-9'}></svg><svg id="2:073340" className={'path-10'}></svg>
                </div>
                <div className={'text-1-555-123-4567'}>
                    +1-555-123-4567
                </div>
            </div>
            <div className={'list-3'}>
                <svg id="2:073346" className={'icon-3'}></svg>
                <div className={'feedback'}>
                    Feedback
                </div>
            </div>
        </div>
    </div>
</div>
);
};
export default Root