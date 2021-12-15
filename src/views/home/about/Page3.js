import React, { Component } from 'react'

export class Page3 extends Component {

constructor (props){
    super(props);
 
    this.state={  renderdata:[""] }
    
}
Handleadd=(e)=>{
var temp=this.state.renderdata
temp.push("hi")
this.setState({renderdata:temp})

}
Handleremove=(e)=>{
    var temp=this.state.renderdata
    temp.splice(e,1)
    this.setState({renderdata:temp})
    
    }


    


  render()
    {
        return (
            <div>
                
            {this.state.renderdata.map((data,i)=>(
                <>
                <input type="text" placeholder='Enter the name' value={i}/><span><button onClick={()=>this.Handleremove(i)} >Remove</button></span> <br/>
                </>
            ))}
                <button onClick={this.Handleadd} >Add</button>
            </div>
        )
    }


}

export default Page3













