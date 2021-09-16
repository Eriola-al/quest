import React from 'react';

export function TopNav(){
    return(
        <div>
            <div>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div>
                <span>Login</span>
                <button className='button'>Sign Up</button>
            </div>
        </div>
    );
}