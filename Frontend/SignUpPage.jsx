import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'sign-up-page'}>
    <div className={'background-color-splash'}>
    </div>
    <div className={'yatrax'}>
        YatraX
    </div>
    <div className={'signup'}>
        <div className={'signup-1'}>
            <div className={'inputs'}>
                <div className={'input'}>
                    <div className={'username'}>
                        Username
                    </div>
                </div>
                <div className={'input-1'}>
                    <div className={'email'}>
                        Email
                    </div>
                </div>
                <div className={'input-2'}>
                    <div className={'password-min-8-characters'}>
                        Password (min 8 characters)
                    </div>
                </div>
            </div>
            <div className={'text'}>
                <div className={'checkbox'}>
                    <div className={'checkbox-1'}>
                    </div>
                </div>
                <div className={'i-have-read-and-agree-to-the-privacy-policy-and-terms'}>
                    <div><span>I have read and agree to the </span><span>privacy policy and terms</span><span>.</span></div>
                </div>
            </div>
            <div className={'button'}>
                <div className={'sign-up'}>
                    Sign up
                </div>
            </div>
        </div>
        <div className={'others'}>
            <div className={'other'}>
                <svg id="135:15622" className={'line'}></svg>
                <div className={'or'}>
                    Or
                </div>
                <svg id="135:15619" className={'line-1'}></svg>
            </div>
            <div className={'otheroptions'}>
                <div className={'button1'}>
                    <svg id="135:15538" className={'icon'}></svg>
                    <div className={'continue-with-google'}>
                        Continue with Google
                    </div>
                </div>
                <div className={'button2'}>
                    <div className={'phone'}>
                        <div className={'rectangle'}>
                        </div>
                        <svg id="135:15550" className={'vector'}></svg><svg id="135:15551" className={'vector-1'}></svg>
                    </div>
                    <div className={'continue-with-mobile-number'}>
                        Continue with mobile number
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};
export default Root