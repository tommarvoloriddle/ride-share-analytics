// components/LoginForm.tsx
'use-c'
import React from 'react';
import {Button} from './button';
import Input from './input';
import Label from './lable';

const LoginForm: React.FC = () => {
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="m-2 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        <p className="m-2 text-center text-sm text-gray-600">Please enter your credentials</p>
      </div>
      <form className="mt-8  space-y-6">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter username" required={true} type="text"  value=''/>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter password" required={true} type="password"  value=''/>
          </div>
        </div>
        <div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
