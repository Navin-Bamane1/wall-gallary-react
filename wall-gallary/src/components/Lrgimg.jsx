import React,{Component} from 'react';

const Lrgimg = (props)=>{
    return(
        <div>
            <div className="lg-imf-holder">
                <div className="top-bar">
                    <a  onClick ={props.colseImage} ><img src='../icon/close-svg.svg' className ="close-icon" alt=""/></a>
                </div>
                <img src={props.src} alt=""/>
                <div className="bottom-bar">
                <h3 className="title">{props.title }</h3>
    <div className="description">{props.details}</div>
                </div>

            </div>
        </div>


    );

}

export default Lrgimg; 