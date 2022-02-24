import React from 'react';
import ReactDOM from 'react-dom';
import profilePic from '../assets/profile.png';


export default function HeaderComponent(){
 
    function goToPage(type){
        if(type==='linkedin')
        window.open("https://www.linkedin.com/in/chiranjeevi-adi-88170272/")
        if(type==='email')
        document.location = "mailto:chiranjeeviadi1992@gmail.com";
    }
    return (
        <div>
            <div className="headerClass">
                <img src={profilePic} className="imgProfile"/>
                <h4>Chiranjeevi Adi</h4>
                <h5>Full stack developer</h5>
            </div>
            <div className="socialBtn">
                <button className="socialBtnLeft" onClick={() =>goToPage('email')}>Email</button>
                <button className="socialBtnRight"  onClick={() =>goToPage('linkedin')}>Linked In</button>
            </div>
        </div>
        
        
    )
} 