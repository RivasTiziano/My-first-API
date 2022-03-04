import { useState } from 'react';
import './SocialMediaDB.css';

export const SocialMediaDB = ()=>{
    const [style, setStyle] = useState({name: "Light", "flex-direction": "row", "background": "rgb(240, 243, 250)", color:"black", "background-color": "white"});
    const changeMode = ()=>style.name === "Dark" ? setStyle({name: "Light", "flex-direction" : "row", "background2": "rgb(240, 243, 250)", color:"black", "background1": "white"}) : setStyle({name: "Dark", "flex-direction" : "row-reverse", "background2": "#252B43", color:"white", "background1": "#1D2029"})
    
 return (
<div className='SocialMediaDashboard' style={{"background-color":style['background1'], margin:"0"}}>
    <div className='container' style={{"color":style['color']}}>
        <div className='header'>
            <section className='title'>
                <h1 className='title-text'>Social Media Dashboard</h1>
                <p className='sub-title' >Total Followers 23.004</p>
            </section>
            <section className='mode'>
                <div className='dark-mode-container'>
                    <h5>{style.name} Mode</h5>
                    <div className='dark-mode-area' style={{"flex-direction" : style['flex-direction']}} onClick={changeMode}>
                        <div className='dark-mode-button'></div>
                    </div>
                </div>
            </section>
        </div>
        <div className='overview'>
            <div className='facebook-box overview-element' style={{"background": style['background2']}}>
                <div className='box-header'>
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    <p className='user'>@elchisi</p>
                </div>
                <h1 className='followers-number'>1987</h1>
                <h4 className='followers'>F O L L O W E R S</h4>
                <div className='followers-today-container'>
                    <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                    <p className='followers-today'>12 Today</p>
                </div>
            </div>
            <div className='twitter-box overview-element' style={{"background": style['background2']}}>
                <div className='box-header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z"/></svg>
                    <p className='user'>@elchisi</p>
                </div>
                <h1 className='followers-number'>1987</h1>
                <h4 className='followers'>F O L L O W E R S</h4>
                <div className='followers-today-container'>
                    <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                    <p className='followers-today'>12 Today</p>
                </div>
            </div>
            <div className='instagram-box overview-element' style={{"background": style['background2']}}>
                <div className='box-header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DF4896"/><stop offset="50.913%" stop-color="#EE877E"/><stop offset="100%" stop-color="#FDC366"/></linearGradient></defs><path fill="url(#a)" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg>
                    <p className='user'>@elchisi</p>
                </div>
                <h1 className='followers-number'>1987</h1>
                <h4 className='followers'>F O L L O W E R S</h4>
                <div className='followers-today-container'>
                    <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                    <p className='followers-today'>12 Today</p>
                </div>
            </div>
            <div className='youtube-box overview-element' style={{"background": style['background2']}}>
                <div className='box-header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z"/></svg>
                    <p className='user'>elchisi</p>
                </div>
                <h1 className='followers-number'>1987</h1>
                <h4 className='followers'>F O L L O W E R S</h4>
                <div className='followers-today-container'>
                    <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                    <p className='followers-today'>12 Today</p>
                </div>
            </div>
        </div>
        <div className='overviews-today'>
            <h4 className='overviews-today-title' style={{"color":style['color']}}> Overviews - Today </h4>
            <div className='overviews-today-container-all'>
                <div className='facebook-1 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='facebook-2 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='instagram-1 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='instagram-2 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='twitter-1 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='twitter-2 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='youtube-1 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
                <div className='youtube-2 overviews-today-element' style={{"background": style['background2']}}>
                    <div className='overviews-today-container'>
                        <p className='overviews-today-element-title'>Page views</p>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </div>
                    <div className='overviews-today-data'>
                        <h1 className='overviews-today-number'>12</h1>
                        <div className='overviews-today-percentaje-container'>
                            <svg className='up/down-icon' xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                            <p className='overviews-today'>3%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 )
}