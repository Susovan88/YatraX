import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'route-page'}>
    <div className={'background-color-splash'}>
    </div>
    <div className={'page-content'}>
        <div className={'route-content'}>
            <div className={'your-route'}>
                Your Route
            </div>
            <div className={'route-steps'}>
                <div className={'step'}>
                    <svg id="2:058662" className={'icon'}></svg>
                    <div className={'text'}>
                        <div className={'step-1'}>
                            step 1
                        </div>
                        <div className={'start-your-journey'}>
                            Start your journey
                        </div>
                    </div>
                </div>
                <svg id="2:058674" className={'divider'}></svg>
                <div className={'step-2'}>
                    <svg id="2:058677" className={'icon-1'}></svg>
                    <div className={'text-1'}>
                        <div className={'step-3'}>
                            step 2
                        </div>
                        <div className={'turn-left-and-follow-main-road-for-100m'}>
                            Turn Left and follow main road for 100m
                        </div>
                    </div>
                </div>
                <svg id="2:059078" className={'divider-1'}></svg>
                <div className={'step-4'}>
                    <svg id="2:059075" className={'icon-2'}></svg>
                    <div className={'text-2'}>
                        <div className={'step-5'}>
                            step 3
                        </div>
                        <div className={'on-board-rt-s-112-bus-at-6b-bus-stopage'}>
                            On Board RT-S-112 Bus at 6B Bus Stopage
                        </div>
                    </div>
                </div>
                <svg id="2:058689" className={'divider-2'}></svg>
                <div className={'step-6'}>
                    <svg id="2:058692" className={'icon-3'}></svg>
                    <div className={'text-3'}>
                        <div className={'step-7'}>
                            step 4
                        </div>
                        <div className={'turn-left-at-howrah-bridge'}>
                            Turn left at Howrah Bridge
                        </div>
                    </div>
                </div>
                <svg id="2:058703" className={'divider-3'}></svg>
                <div className={'step-8'}>
                    <svg id="2:058706" className={'circle-1'}></svg>
                    <div className={'text-4'}>
                        <div className={'step-9'}>
                            step 5
                        </div>
                        <div className={'arrive-at-your-destination'}>
                            Arrive at your destination
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'nav-bar'}>
            <svg id="2:017035" className={'home-icon'}></svg><svg id="135:11978" className={'ticket-icon'}></svg>
            <div className={'route-exp'}>
                <svg id="2:017031" className={'route-fill'}></svg>
                <div className={'route'}>
                    Route
                </div>
            </div>
            <svg id="2:053684" className={'profile-icon'}></svg>
        </div>
    </div>
</div>
);
};
export default Root