import React from "react";
import Style from "../style/style.css"
import Image from "../image/image.jpg"
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
//import ViewMore from "../src/component/viewMore";

class Cards extends React.Component{

    

render(){
    return(
        <div className="wrapper">
<div style={{width:"100%"}}><img src ={Image} className ="imageWrapper"/></div>
<div className="content-merge">
<div className ="content-a"> DATA SCIENCE  PRODEGREE</div>
<div className ="content-b"><i class="fa fa-star" aria-hidden="true"></i> <label>4.8 </label> Out of 5 by 6000 learnersa</div>
<div  className ="content-c"> <i class="fa fa-caret-up" aria-hidden="true"></i> <label>16X</label> Industry Demand</div>
</div>

<div className="content-button">
<button className="button-one">FREE DEMO</button>
<a href ="/viewMore">



<button className="button-one" >VIEW MORE</button>
</a>
</div>

</div>

    )
}
}

export default Cards;