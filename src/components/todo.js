import React,{useState ,useEffect} from "react";

const getlocalitems=()=>{
  let list = localStorage.getItem('list');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return[];
  }
  
  
      }
const Todo = () => {

    const [inputdata,setinput]= useState("");
    const [items, setitems]=useState(getlocalitems());

    //to set from localStorage

  
    const additem=()=>{
        if(  !inputdata ){

            alert("add item")
        }
          
        else{
            setitems([...items,inputdata]);
            setinput("");
    
        }
    console.log(items);
    }
    const handle=(e) =>{

        setinput(e.target.value)   
    }
    const deleteitem=(id) =>{
   

       const update = items.filter((element , index) =>{

return(index != id);
       })
        
       
     setitems(update); 


    }
    const remove=() =>{
        setitems([]);
    }

    //add data to local storage
    useEffect(() =>{

localStorage.setItem('list', JSON.stringify(items));


    },[items])


    return (
      <div >
       <div className="bgc">
     <div className="center ">

       <img className="imgy" src="https://i.pinimg.com/564x/ec/cf/a1/eccfa11fd98660b1c9e8f6799a140c93.jpg"/>
       <h1>ADD YOUR ITEMS</h1>
       </div>
       </div>
       <div className=" wrapper">
<div className="custom-checkbox custom-control " >


   <input type="text" placeholder="add items..." value={inputdata} onChange={handle}/> 
   
   <i class="fas fa-plus-square  border-0 btn-transition btn btn-outline-success fa-lg " title="add item" onClick={additem}></i>
   </div>

 <div className=" center j">
  

{

    items.map((element,index) => {      
        return(
            
            <div className=" todoList"  key={index} >
       <h5>{element} <i class="fas fa-trash-alt border-0 btn-transition btn btn-outline-danger fa-lg add-btn " title="delete item" onClick= {() => deleteitem(index)}></i></h5> </div>
        )
      
   })

}  
</div>

<div className="center">
<div>
<button class="button" onClick={remove}>
 <span>CHECKLIST</span>
</button>
</div>
</div>
    
  
      </div>
</div>

    );
    

  };

 export default Todo;
