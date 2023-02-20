import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
const Forms = ()=>{
    const ValidationSchema = Yup.object().shape({
        "firstname":Yup.string().required("firstname can't be left blank").min(3,"minimun 3 characters are required").max(6,"maminimun 3 characters are allowed")
    });
    const {register,
           reset,
          handleSubmit,
          formState:{errors}} = useForm({
        resolver:yupResolver(ValidationSchema)
    });
   
    //console.log(errors);
    const onSubmit = (data)=>{
        console.log(data);
    };
    return(
        <>
        <div className="register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*
                    first name
    */}
                    <div className="form-group">
                        <label>First Name</label> 
                        <input type="text"
                               {...register("firstname")}
                               className={`form-control ${errors.firstname?'is-invalid':''}`}></input> 
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("firstname")?errors.
                                firstname.message:""
                            }
                    </div>
                 
                    </div>
                    {/*
                      submit button & reset button 
                        */}
<div className="form-group">
                        <label>Last Name</label> 
                        <input type="text"
                               {...register("lastname")}
                               className={`form-control ${errors.lastname?'is-invalid':''}`}></input> 
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("lastname")?errors.
                                lastname.message:""
                            }
                    </div>
                    </div>
                    {/*
                      submit button & reset button 
                        */}
<div className="form-group">
                        <label>Email</label> 
                        <input type="text"
                               {...register("email")}
                               className={`form-control ${errors.email?'is-invalid':''}`}></input> 
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("email")?errors.
                                email.message:""
                            } 
                    </div>
                    </div>
                    {/*
                      submit button & reset button 
                        */}


                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-sm m-5">Submit</button>
                        <button type="reset" onClick={()=>reset()} className="btn btn-danger btn-sm m-5">Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Forms;