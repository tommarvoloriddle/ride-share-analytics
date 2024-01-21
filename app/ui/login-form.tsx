// components/LoginForm.tsx
'use client'
import React, {useState} from 'react';
import {Button} from './button';
import Input from './input';
import Label from './lable';

const LoginForm: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginRequested, setLoginRequested] = useState<boolean>(false);
    const [loginSuccess, setLoginSuccess] = useState<boolean>(true);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoginRequested(true);

      // You can perform additional actions here when the form is submitted
      console.log(`Logging in with username ${username} and password ${password}`);

      // // Call the API to login
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // const data = await response.json();
      setLoginSuccess(false);
      setLoginRequested(false);
    };


  return (
    <div className="max-w-md w-full mx-auto mt-8 bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">Login</h2>
      <p className="mt-2 text-sm text-gray-600 text-center">Please enter your credentials</p>
      <form className="mt-8 space-y-6 bg-gray-100">
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter username" required={true} type="text"  value='' onChange={handleUsernameChange}/>
        </div>
        <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter password" required={true} type="password"  value='' onChange={handlePasswordChange}/>
        </div>
      </div>
      
      <div className='p-4'>
        <Button className='' type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </div>
        {
          !loginSuccess ? ( 
            <div className="mt-8 text-center">
              <h2 className=" font-extrabold text-gray-800">Login Failed</h2>
            </div>
          ) : null
        }
     </form>
    </div>
  );
};

export default LoginForm;
