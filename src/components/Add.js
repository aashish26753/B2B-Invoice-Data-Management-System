import * as React from "react";


function AddComponent ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,posting_id,total_open_amount,
    baseline_create_date,cust_payment_terms,invoice_id,document_type,changeHandler, submitHandler, closeHandlerAdd}) {
    return <>
        <section style={{backgroundColor: "#0C2D48"}}>
        <h2 style={{color:"white", marginLeft:"30px"}}>Add Details</h2>
        <form style={{width:"100%"}}>
            {/* <label style={{color:"white"}}>Business Code</label> */}
            <input value={business_code} name="business_code" placeholder={"business_code"} style={{margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Customer Number</label> */}
            <input value={cust_number} name="cust_number" placeholder={"cust_number"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Clear Date</label> */}
            <input value={clear_date} type="date" name="clear_date" placeholder={"clear_date"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Business Year</label> */}
            <input value={buisness_year} name="buisness_year" placeholder={"buisness_year"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Document ID</label> */}
            <input value={doc_id} name="doc_id" placeholder={"doc_id"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}} requried onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Posting Date</label> */}
            <input value={posting_date} type="date" name="posting_date" placeholder={"posting_date"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Document Create Date</label> */}
            <input value={document_create_date} type="date" name="document_create_date" placeholder={"document_create_date"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Due in Date</label> */}
            <input value={due_in_date} type="date" name="due_in_date" placeholder={"due_in_date"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Invoice Currency</label> */}
            <input value={invoice_currency} name="invoice_currency" placeholder={"invoice_currency"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Posting ID</label> */}
            <input value={posting_id} name="posting_id" placeholder={"posting_id"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}} onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Total Open Amount</label> */}
            <input value={total_open_amount} name="total_open_amount" placeholder={"total_open_amount"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Baseline Create Date</label> */}
            <input value={baseline_create_date} type="date" name="baseline_create_date" placeholder={"baseline_create_date"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Customer Payment Terms</label> */}
            <input value={cust_payment_terms} name="cust_payment_terms" placeholder={"cust_payment_terms"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Invoice ID</label> */}
            <input value={invoice_id} name="invoice_id" placeholder={"invoice_id"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            {/* <label style={{color:"white"}}>Document Type</label> */}
            <input value={document_type} name="document_type" placeholder={"document_type"} style={{ margin: "20px", width: 150, height:"50px", borderRadius:"5px"}}  onChange={changeHandler}/>
            <br/>
            <input value={"Add"} type={"submit"} placeholder={"Submit"} style={{height:"34px", borderRadius:"5px", marginLeft:"50px", marginBottom:"33px", paddingRight:"92px", paddingLeft:"84px", backgroundColor: "#0C2D48", color:"white", borderColor:"white"}} onClick={submitHandler}/>
            <input value={"Cancel"} type={"submit"} placeholder={"Cancel"} style={{height:"34px", borderRadius:"5px", marginLeft:"105px", marginBottom:"33px", paddingRight:"69px",paddingLeft:"69px", backgroundColor: "#0C2D48", color:"white", borderColor:"white"}} onClick={closeHandlerAdd}/>
        </form>
        </section>
    </>
}

export default AddComponent;