import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <p>Social Media Accounts:</p>
        </div>
        <div className='social'>
        <SocialIcon className='social-ic' url="https://facebook.com" />
        <SocialIcon className='social-ic' url="https://instagram.com" />
        <SocialIcon className='social-ic' url="https://twitter.com" />
        <SocialIcon className='social-ic' url="https://discord.com" />
        </div>
        <p>Copyright © 2023 Rambo. All rights reserved.</p>
    </div>
  )
}

export default Footer