import React from 'react';

const Dash = () => {
    return (
        <div className="dash">
            <h3>Welcome, David</h3>
            <p>Details of your subscription plan</p>
            <h4>Current Plan: Monthly</h4>
            <h4>Days Booked: 8</h4>
            <h4>Next Session: -</h4>
            <p>You have 4 sessions left this quarter</p>
            <button>Book a session</button>
        </div>
    )
}

export default Dash;