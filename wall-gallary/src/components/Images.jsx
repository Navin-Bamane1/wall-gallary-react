import React ,{ Component } from "react";
import Img from './Img'
import Lrging from './Lrgimg'
import './images.css'
class Images extends Component{
constructor(props){
    super(props)
    this.state = {
        imgLst:[{
            imgSrc: '../img/1.jpg',
            title: 'this one image',
            details : 'this one details'
        },
        {
            imgSrc: '../img/2.jpg',
            title: 'this two image',
            details : 'this 2 details'
        },
        {
            imgSrc: '../img/3.jpg',
            title: 'this three image',
            details : 'this 3 details'
        },
        {
            imgSrc: '../img/4.jpg',
            title: 'this four image',
            details : 'this 4 details'
        }
    ],
        imgStyle:{
            imgListConStyle:{
                display:"flex"
            },
            lrgImgConStyle:{
                display:"none"
            }
        },
        lrgImg:{
            src : '',
            title :'',
            details :''
        }
    }
}

     handlerClick =(e)=>{

        console.log("this action is worang");
        e.preventDefault();
        if(this.state.imgStyle.imgListConStyle.display==='flex'){
            this.setState({
                imgStyle: {
                    imgListConStyle:{
                        display:"none"
                    },
                    lrgImgConStyle:{
                        display:"block"
                    }
                }
            });
            Object.values(this.state.imgLst).forEach(element => {
                console.log(element.imgSrc);
                let sourceString = '..'+e.target.src.toString().slice(21);
                console.log(sourceString);
                if(element.imgSrc === sourceString)
                {
                    this.setState({
                        lrgImg:{
                            src : e.target.src,
                            title :element.title,
                            details :element.details
                        }               
                    })
                }else
                console.log("didn't match withany element");
                


            });    
        }

    }
    lrgImgClose =(e)=>{
        e.preventDefault();
        this.setState({
            imgStyle: {
                imgListConStyle:{
                    display:"flex"
                },
                lrgImgConStyle:{
                    display:"none"
                }
            }
        });
    }

    render(){
        let imageItemList =this.state.imgLst.map(image=>{
            return (
                <botton onClink={this.handlerClick} style ={{background:'none',border:'none'}} key ={image.imgSrc}><Img src = {image.imgSrc} />
                </botton>
            );
        });
        return(
            <React.Fragment>
                <div className ="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <Lrging colseImage ={this.lrgImgClose} src={this.state.lrgImg.src} title={this.state.lrgImg.title} details={this.state.lrgImg.details}/>
                </div>    

                <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                {imageItemList}
                </div>
            </React.Fragment>

            );
    }
}

export default Images;