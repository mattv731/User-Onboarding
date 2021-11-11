import React from 'react';

const Form = (props) => {

    const { onChange, submit } = props;
    const { username, email, password, terms } = props.values;


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
               <label>Terms of Service
                   <input
                    type="checkbox"
                    name="terms"
                    checked={checked}
                    onChange={onChanged}
                    />
               </label>
           </form>
        </div>
    )
}
export default Form;