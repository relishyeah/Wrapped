import React from 'react';
import './styles.css';

const Home = () => {
    return (
    <div className='container'>
        <div className="content">
            <div className='title'>
                Wrapped, <br/> Wrapped
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg' />
            </div>
            
            <div className="tagline">
                Unwrap your listening, year by year
            </div>
            

            <div onClick={() => console.log(123)} className='logIn'>
                    See yours
            </div>
        </div>
        <div className="about">
            Created by Quinn Relyea | About | Privacy
        </div>
    </div>  );
}
 
export default Home;