import * as React from "react";
import axios from "axios";
// import Alert from '@mui/material/Alert';
function DeleteComponent({selected,closeHandlerDelete}){

    const handleDelete = async () => {
         let data = "sl_no="+selected.join(',');
         let response = await axios.get("http://localhost:8080/HRC61343WK/delete?"+ data);
         if(response.deleted === true){
             window.location.reload(true);
        }
        window.alert("Data Successfully Deleted!!");
        window.location.reload(true);
     };


    return<>
        <section style={{backgroundColor: "#0C2D48"}}>
        <h2 style={{color:"white", marginLeft:"30px"}}>Delete Details</h2>
        <form>
            <p style={{color:"white", marginLeft:"30px"}}>Are you sure you want to delete these record(s)?</p>
            <br/>
            <button style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginBottom:"20px",paddingRight:"120px", paddingLeft:"120px", backgroundColor: "#0C2D48", color:"white", borderColor:"white"}} onClick={handleDelete}>Delete</button>
            {/* <input type={"submit"} value={"Delete"} style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginBottom:"20px", paddingRight:"120px", paddingLeft:"120px", backgroundColor: "#0C2D48", color:"white", borderColor:"white"}}/> */}
            <input type={"submit"} value={"Cancel"} style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginBottom:"20px",paddingRight:"120px", paddingLeft:"120px", backgroundColor: "#0C2D48", color:"white", borderColor:"white"}} onClick={closeHandlerDelete} />
        </form>
        </section>


    </>
}

export default DeleteComponent;