import React from "react";
import { Button, TextField, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RefreshRounded } from "@mui/icons-material";
// import { AnalyticsView } from "./AnalyticsView";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250)",
      borderRadius: 15,
    }
  }
}));


const NavbarComponent = (props) => {
  const classes=useStyles();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin:"1vw", height:"50px"}}>
      <ButtonGroup>
      <Button
        onClick={props.predictClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white", paddingRight: "4vw", paddingLeft: "4vw" }}>Predict</Button>
      
      <Button
        onClick={props.predictClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5",color: "white",paddingRight: "4vw", paddingLeft: "4vw" }}>Analytics View</Button>
        {/* <AnalyticsView/> */}
      
      <Button
        onClick={props.searchClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white",paddingRight: "4vw", paddingLeft: "4vw" }}>Advance Search</Button>

      </ButtonGroup>

      <button style={{marginLeft: "2px", border: "2px solid #3f51b5",variant:"outlined", backgroundColor: "#0C2D48" ,color: "white", marginRight:"20px", borderRadius:"5px"}}  onClick={() => window.location.reload(true)}><RefreshRounded /></button>
      
      
      <div style={{ marginLeft: "30px", paddingRight: "320px", width: 60, height:"50px"}}>
        <TextField
          style={{width: 350, textFillColor: "white"}}
          label="Search Customer ID..."
          variant="filled"
          className={classes.root}
          // multiline={true}
          size="medium"
        />
      </div>

      <ButtonGroup>
      <Button
        onClick={props.addClick}
        variant="outlined"
        style={{ border: "2px solid #3f51b5", color: "white", paddingRight: "60px", paddingLeft: "60px"}}>Add<AddIcon/></Button>
      <Button
        onClick={props.editClick}
        disabled={props.selected.length === 1 ? false : true}
        variant="text"
        style={{ color: "white", paddingRight: "60px", paddingLeft: "60px"}}>Edit<EditIcon/></Button>
      <Button
        onClick={props.deleteClick}
        variant="outlined"
        // disabled={props.selected.length === 1 ? false : true}
        style={{ border: "2px solid #3f51b5", color: "white", paddingRight: "60px", paddingLeft: "60px"}}>Delete<DeleteOutlineIcon/></Button>
      </ButtonGroup>
    </div>
  );
};

export default NavbarComponent;