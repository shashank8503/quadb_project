import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch,Route, BrowserRouter } from "react-router-dom";
import Data from './Data';
import Header from './Header';
import "./Home.css"




import Time from './Time';



function Home() {
    return (
        
        
        <div className="home">
            <div className="fff">
                Best Price to Trade

            </div>
           
           
            <div className="time">
                <Time/>
                

            </div>
            
            
            
            <div className="head2">
                
                Average BTC/INR net price including comission

            </div>
            <Link to="https://finstreet.in/courses">
            <div >
                <img className="ad1" src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"/>

            </div>


            </Link>
          
           
            <div>
                <Data/>

                
            </div>



            <Link to="https://ftx.com/#a=finstreet">
            <div >
                <img className="ad2" src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"/>
            </div>

            </Link>
            
            <div >
                <hr className="hrr"/>
            </div>
            <div className="footer">
                    <div className="head3">
                    Copyright © 2019 

                    </div>
                    <div className="head3">
                    HodlInfo.com

                    </div>
                    <div className="head3">
                    Developed By

                    </div>
                    <div className="green29">
                    QuadBtech
                    

                    </div>
                    <div className="head4">
                    Support

                    </div>
                    

                
                          

                
                

            </div>
            <div className="foot1">
                <button  className="btn3">
                    <div className="text">
                    Add hodlinfo to home screen
                    </div>
                   
                </button>




            </div>
            

            
         
            
        </div>
    )
}

export default Home
