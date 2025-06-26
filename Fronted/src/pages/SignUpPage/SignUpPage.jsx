import React from 'react';
import "./SignUpPage.css";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'sign-up-page'}>
    <div className={'background-color-splash'}>
    </div>
    <div
  className="absolute top-[96px] left-[36px] w-[181px] h-[1px] text-[36px] font-normal leading-[0.01px] text-[rgba(44,44,44,0.8)] flex items-center whitespace-nowrap font-['Sonsie_One'] ">
    YatraX
    </div>

    <div className={'signup'}>
        <div className={'signup-1'}>
            <div className={'inputs'}>
                <div className={'input'}>
                    <input className={'username outline-0 placeholder-[#907EFF]'} placeholder='Username'/>
                </div>
                <div className={'input-1'}>
                    <input className={'email outline-0 placeholder-[#907EFF]'} placeholder='Email'/>
                </div>
                <div className={'input-2'}>
                    <input className={'password-min-8-characters outline-0 placeholder-[#907EFF]'} type='password' placeholder='Password (min 8 characters)'/>
                </div>
            </div>
            <div className={'text'}>
                <input type='Checkbox' className={'checkbox-1'} />
                <div className={'i-have-read-and-agree-to-the-privacy-policy-and-terms'}>
                    <div><span>I have read and agree to the </span><span> <a href="/privacy-policy">privacy policy and terms</a> </span><span>.</span></div>
                </div>
            </div>
            <button className={'button'}>
                <div className={'sign-up'}>
                    Sign up
                </div>
            </button>
        </div>
        <div className={'others'}>
            <div className={'other'}>
                <img
                    src="public/Line 4.svg"
                    alt="line"
                    className="object-fit font-bold line"
                />
                <div className={'or'}>
                    Or
                </div>
                <img
                    src="public/Line 4.svg"
                    alt="line"
                    className="  line"
                />
            </div>
            <div className={'otheroptions'}>
                <div className={'button1 outline-2 outline-[#907EFF]'}>
                <img
                    src="public\GoogleIcon.png"
                    alt="GoogleIcon"
                    className=" icon"
                />
                    <div className={'continue-with-google'}>
                        Continue with Google
                    </div>
                </div>
                <div className={'button2 outline-2 outline-[#907EFF]'}>
                    <div>
                        <img src="public\Phone.svg" alt="phone"  />
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