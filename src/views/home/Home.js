// import { render } from '@testing-library/react'
import React ,{ useState} from 'react' ////why written in curly braces jo curly braces m likha h bo method h for calling
import './Home.css'



// import About from './about/About'





// ------------------use state using function component-----------------------------

// const Home=()=>
// {


   

//     // const [state, setstate] = useState("red")

//     const[value,setvalue]=useState("")



//     const handleinput=(e)=>
//     {
//         setvalue(e.target.value)

//     }


  


//     // ------------------------const nancy =() =>{
        
//     // -----------------------    setstate("yellow")
//     //   ---------------------  console.log({setstate});
//     //-------------------------- }
    
   




//     return(
//         <>

//         <About mycolor={value} />
      
//         <input placeholder="Enter Color Name" value={value}  onChange={handleinput} />


        {/* <button onClick={nancy} style={{backgroundColor:"skyblue",borderRadius:"2px",height:"25px", width:"200px" ,margin:"10px 0 0 10px"}}  >Be a chamaleon</button> */}




//         </>
//     )
        
// }







// **************************USE STATE USING CLASS COMPONENT*******************************

// class Home extends Component {


// constructor(props)
// {

//     super(props)


//     this.state=
//     {
//                 value :""      
//     }
// }


// handleinput=(e) =>{
// this.setState({value:e.target.value})
// }



//     render() {
//         return (

//             <>
//             <About mycolor={this.state.value}/>
//             <div>
//                 <input placeholder="Enter Color Name" value={this.state.value}  onChange={this.handleinput} />
//             </div>
//             </>
//         )
//     }
// 

const Dela = ()=>{

const [data,setData]=useState({
    Name:"" ,
    Mobile:'+91 ',img:[]
    })

// const handleName=(e)=>
// {
// setData({...data,['Name']:e.target.value}) 
// }

// const handleMobile=(e)=>
// {
//     setData({...data,['Mobile']:e.target.value})
// }
// ****now we'll use only one handle function *******
const handleinput=(e)=>{
    console.log(e.target.name)
    setData({...data,[e.target.name]:e.target.value})
    

}
const handlebutton=()=>{

if(data.Name===""){
    alert("Enter Your Name!!")
}
else if(data.Mobile===""){
    alert("Enter your Mobile")
}
else if(data.Mobile.length!==10){
    alert("enter correct format for mobile number")
}
else{
    console.log(data)
}
}


const handlefile=(e)=>{
console.log(e.target.files)
console.log(e.target.files[0])

var temp=e.target.files[0]
console.log(temp.type)
var word=temp.type
const ext=word.split("/")
console.log(ext)
const extt=ext[1]

if(extt!=="jpg"&&extt!=="png"&&extt!=="jpeg"){
    alert("please select an image file")
}
else{
    setData({...data,["img"]: URL.createObjectURL(e.target.files[0])})
}

// since img tag down there wont take any blob or anything but onlt string so understand the flow

}





return(
    <>
    <div  className="consent_file" >
    <input placeholder="Enter Your Name" name="Name" value={data.Name} onChange={handleinput} /> <br/>
    <input placeholder="Enter Your mobile" name="Mobile" value={data.Mobile} onChange={handleinput}    /><br/>
    <input type="file" placeholder="Upload your file" onChange={handlefile} />
    <span><img  src={data.img} style={{width:"100px",height:"100px"}} /></span><br/>
    <button style={{borderRadius:"10px" , border:"0",backgroundColor:"green",opacity:"75%"}} onClick={handlebutton}>Submit</button>

    </div>




   
    </>
    

)





}


export default Dela

