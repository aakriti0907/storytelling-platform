import React from 'react';
import './home.css';

function Home (){

  
      return (
        <body>
        <div>
        <ul>
        
        <button><li><a class="Home" id="Home">Log in</a></li></button>
        <button> <li><a id="Freelancing" >Freelancing</a></li></button>
        <button><li><a id="Community">Community</a></li></button>
        <button><li><a id=" Publishing">Publishing</a></li></button>
        <button><li><a id=" Opportunities">Opportunities</a></li></button>
        <button><bi><a id="about">About</a></bi></button>

        </ul>
        <img src={process.env.PUBLIC_URL+"img2.PNG"} width="400" height="500"/>
      <h1>HI , WE ARE NIRVANA</h1>
      <h2>THE WORLD'S MOST LOVED SOCIAL</h2>
      <h2>STORYTELLING PLATFORM. </h2>
      <button2><b id="writing">START WRITING</b></button2>
      <button2><b id="reading">START READING</b></button2>
      
    
        </div>
        </body>
      

      );
   }




export default Home;