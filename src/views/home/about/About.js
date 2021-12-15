
import React,{Component} from "react";




// function About({mycolor})
// {
//     return(
//     <>
//         <h1>This is About page</h1>


//         <div style={{ width:"200px",height:"100px", marginLeft:"10px", border:"1px solid black", backgroundColor:mycolor}}></div>
//     </>
//     )
// }




class About extends Component{

    
    constructor(props){
        super(props)
        
       


        this.state={
             x:"",

             output:[]
        }
        
    }
    handleInput=(e)=>{
        this.setState({x:e.target.value})

    }
    
    handlebutton=()=>{
        
        var t=[];
        for(let i=1; i<=10;i++)
        {
            t.push(`${this.state.x}x${i}=${this.state.x*i}`)
        }
        this.setState({output:t})
        // ye this.setstate jo likha hena usme kya hoga ki jo khali output array h usko replace kr dega jo ki bhar chuka h 10 index se
    }




    render(){

        return(
            <>
                <input placeholder="Enter the number" value={this.state.x} onChange={this.handleInput} />
                <button onClick={this.handlebutton}>click to get table</button>
                {this.state.output.map((data,i)=>
                <>
                <h4>{data}</h4>
                </>
                )}

            </>
        )}
















}

export default About;