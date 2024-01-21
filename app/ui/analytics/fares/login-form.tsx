// components/LoginForm.tsx
'use-c'
import React from 'react';
import {Button} from "@/app/ui/button";
import Input from "@/app/ui/input";
import Label from "@/app/ui/lable";

const LoginForm: React.FC = () => {
  return (
<div className="max-w-md w-full mx-auto mt-8 bg-gray-100 p-8 rounded-lg">
  <h2 className="text-3xl font-extrabold text-gray-900 text-center">Trip Fare Prediction</h2>
  <p className="mt-2 text-sm text-gray-600 text-center">Predict the fare for a trip</p>

  <form className="mt-8 space-y-6 bg-gray-800">
    <div className="rounded-md shadow-sm -space-y-px">
      <div className="mb-4">
        <Label htmlFor="pickup-location">Pickup Location</Label>
        <Input id="pickup-location" placeholder="Enter pickup location" required type="text" value=''/>
      </div>
      <div className="mb-4">
        <Label htmlFor="dropoff-location">Dropoff Location</Label>
        <Input id="dropoff-location" placeholder="Enter dropoff location" required type="text" value=''/>
      </div>
    </div>
    
    <div>
      <Button className="w-full" type="submit">
        Predict Fare
      </Button>
    </div>
  </form>

  <div className="mt-8 text-center">
    <h2 className="text-2xl font-extrabold text-gray-900">Predicted Fare</h2>
    <p className="mt-2 text-lg text-gray-600">
      The predicted fare is
      <span className="font-bold">$35</span>.
    </p>
  </div>
</div>

  );
};

export default LoginForm;
