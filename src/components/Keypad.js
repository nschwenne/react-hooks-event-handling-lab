// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function showText(event) {
        console.log('Entering password...')
    }
return (
<div> 
<input 
type="password" 
onChange={showText}
placeholder="Enter Password"
/>
</div>
)
}
export default Keypad;