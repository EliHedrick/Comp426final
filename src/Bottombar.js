import React from 'react'

export default function Bottombar() {

    function submit() {
        if(document.getElementById('response') != null)
            return;
        let response = document.createElement('p');
        response.id = 'response';
        response.innerHTML = 'Thank you for your response!';
        document.getElementById('bottombar').appendChild(response);
    }
    return (
        <div id='bottombar'>
            <label htmlFor='opinion'>I think snakes are </label>
            <input type='text' name='opinion' id='opinion' list='opinionlist'></input>
            <datalist id='opinionlist'>
                <option>cool</option>
                <option>awesome</option>
                <option>amazing</option>
                <option>extraordinary</option>
                <option>remarkable</option>
                <option>spectacular</option>
                <option>stupendous</option>
                <option>stunning</option>
                <option>incredible</option>
                <option>magnificent</option>
                <option>awe-iinspiring</option>
                <option>sublime</option>
                <option>wondrus</option>
                <option>badass</option>
                <option>out of this world</option>
                <option>epic</option>
                <option>poggers</option>
            </datalist>
            <button id='submit' onClick={submit}>Submit</button>
        </div>
    )
}
