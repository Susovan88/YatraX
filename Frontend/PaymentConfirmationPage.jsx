import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'payment-confermation-page'}>
    <div className={'background-color-splash'}>
    </div>
    <div className={'confirmation-card'}>
        <div className={'confirmation-tick'}>
            <svg id="111:34316" className={'tick-icon'}></svg>
            <div className={'thank-you-statement'}>
                <div className={'thank-you'}>
                    Thank You
                </div>
                <div className={'payment-done-successfully'}>
                    Payment Done Successfully
                </div>
            </div>
        </div>
        <div className={'ticket-preview'}>
            <div className={'ticket-details'}>
                <div className={'ticket-no'}>
                    <div className={'ticket-code'}>
                        <div className={'ticket-no-1'}>
                            Ticket No:
                        </div>
                        <div className={'text-123456789'}>
                            #123456789
                        </div>
                    </div>
                    <div className={'ticket-price'}>
                        <div className={'rs-3000'}>
                            Rs. 30.00
                        </div>
                    </div>
                </div>
                <svg id="111:34303" className={'line-63'}></svg>
                <div className={'summery'}>
                    <div className={'information'}>
                        <div className={'date'}>
                            Date
                        </div>
                        <div className={'june-30-2025'}>
                            June 30, 2025
                        </div>
                    </div>
                    <div className={'information-1'}>
                        <div className={'booking-time'}>
                            Booking Time
                        </div>
                        <div className={'text-0750-am'}>
                            07:50 AM
                        </div>
                    </div>
                    <div className={'information-2'}>
                        <div className={'passenger'}>
                            Passenger
                        </div>
                        <div className={'text-2-persons'}>
                            2 Persons
                        </div>
                    </div>
                </div>
            </div>
            <div className={'ride-name--no'}>
                <div className={'s-112-naktala-howrah'}>
                    S-112 (Naktala-Howrah)
                </div>
                <div className={'wb-05-2922'}>
                    WB 05 2922
                </div>
            </div>
        </div>
        <div className={'button'}>
            <div className={'home'}>
                Home
            </div>
        </div>
    </div>
</div>
);
};
export default Root