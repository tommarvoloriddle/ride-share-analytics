// components/LoginForm.tsx
'use client'
import React, { useState } from 'react';
import {Button} from "@/app/ui/button";
import Input from "@/app/ui/input";
import Label from "@/app/ui/lable";
import Dropdown from "@/app/ui/dropdown";
const {
  locations
} = require('@/app/lib/locations');
import { getFare } from '@/app/lib/data';

const PredictForm: React.FC = () => {

const [selectedLocationPickUp, setSelectedLocationPickUp] = useState<string>(locations[10].Zone); // Default to New York
const [selectedLocationDropOff, setSelectedLocationDropOff] = useState<string>(locations[0].Zone); // Default to New York
const [predictedFare, setPredictedFare] = useState<Number>(0); // Default to New York

const handleLocationChangePickUp = (selectedValue: string) => {
  setSelectedLocationPickUp(selectedValue);
    // You can perform additional actions here when the location changes
    console.log(`Selected location: ${selectedValue}`);
};

const handleLocationChangeDropOff = (selectedValue: string) => {
  setSelectedLocationDropOff(selectedValue);
    // You can perform additional actions here when the location changes
    console.log(`Selected location: ${selectedValue}`);
};

const [predictionRequested, setPredictionRequested] = useState<boolean>(false);

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setPredictionRequested(true);

  // You can perform additional actions here when the form is submitted
  console.log(`Predicting fare for trip from ${selectedLocationPickUp} to ${selectedLocationDropOff}`);

  getFare(1, 10).then((data) => {
    console.log(data);
    setPredictedFare(data.fare);
    setPredictionRequested(false);
  });
    // Call the API to predict the fare
    // const response = await fetch('/api/predict-fare', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     pickupLocation: selectedLocationPickUp,
    //     dropoffLocation: selectedLocationDropOff,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // const data = await response.json();
    // setPredictedFare(data.predictedFare);
    // setPredictedFare(35);
    // setPredictionRequested(false);
  };

const locationOptions = locations.map((location: string) => {
  return location.Zone;
});

return (
<div className="max-w-md w-full mx-auto mt-8 bg-gray-100 p-8 rounded-lg">
  <h2 className="text-3xl font-extrabold text-gray-900 text-center">Trip Fare Prediction</h2>
  <p className="mt-2 text-sm text-gray-600 text-center">Predict the fare for a trip</p>

  <form className="mt-8 space-y-6 bg-gray-100">
    <div className="rounded-md shadow-sm -space-y-px">
      <div className="mb-4">
        <Label htmlFor="pickup-location">Pickup Location</Label>
        <Dropdown id="pickup-location" value={selectedLocationPickUp} options={locationOptions} onChange={handleLocationChangePickUp}/>
      </div>
      <div className="mb-4">
        <Label htmlFor="dropoff-location">Dropoff Location</Label>
        <Dropdown id="dropoff-location" value={selectedLocationDropOff} options={locationOptions} onChange={handleLocationChangeDropOff}/>
      </div>
    </div>
    
    <div className='p-4'>
      <Button className='' type="submit" onClick={handleSubmit} disabled={predictionRequested}>
        Predict Fare
      </Button>
    </div>
  </form>
  {
    predictionRequested ? (
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">Predicting...</h2>
        {/* Add your loading animation here, for example, a spinner */}
        <div className="spinner"></div>
      </div>
    ) : (
      <div className="mt-8 text-center">
      </div>
    )
  }
  { predictedFare.valueOf() <= 0 ? (
        // Loading animation when predictedFare is undefined or 0
        <div className="mt-8 text-center">
        </div>
      ) : (
        // Render the predicted fare when it is defined and not 0
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">Predicted Fare</h2>
          <p className="mt-2 text-lg text-gray-600">
            The predicted fare is
            <span className="font-bold"> ${predictedFare.toString()}</span>.
          </p>
        </div>
      )}
</div>
  );
};

export default PredictForm;
