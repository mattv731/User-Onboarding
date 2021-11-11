import React from 'react';

const Form = (props) => {
    return (
        <div>     
           <h1>
        My Form
           </h1>
           <form>
               <label>Name
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
               </label>
               <label>Email
                   <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    />
               </label>
               <label>Password
                   <input
                   type="password"
                   name="password"
                   value={password}
                   onChange={onChange}
                   />
               </label>
               <label></label>
           </form>
        </div>
    )
}
export default Form;