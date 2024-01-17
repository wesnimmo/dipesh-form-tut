import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState()

  const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data)
  }
  console.log('error--->',errors)

  return (
    
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <h1>Registration Form</h1>
        <div className="ud divider"></div>
        <div className="ui form">
           <div className="field">
            <label>Username</label>
            <input 
              type="text" name="username" 
              placeholder="username"  
              {...register("username", { required: "Username is required"})}
            />
          </div>
           <p>{errors.username?.message}</p>
           <div className="field">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="email" 
              {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^\S+@\S+$/i
              },
            })} 
            />
          </div>
           <p>{errors.email?.message}</p>
           <div className="field">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                },
                maxLength: {
                  value: 10,
                },
              })} 
            />
          </div>
           <p>{errors.password?.message}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
