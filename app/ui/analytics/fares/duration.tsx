import Image from "next/image";
import Header  from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import LoginForm from "./login-form";
import PredictForm from "./PredictForm";
import PredictVolume from "./PredictVolume";
import { url } from "inspector";
export default function Home() {
  return (
    <div >
      <Header value="Fare Analytics"/>
      <div style={{ textAlign: 'center', color: '#40340' ,margin: '2rem' }}>
        <p >
          Ride Share Analytics is a comprehensive product that leverages advanced data analysis to provide valuable insights for the ride-sharing industry. By aggregating and analyzing large datasets from ride-sharing platforms, our product enables businesses to optimize routes, enhance driver efficiency, and improve overall service quality. With real-time analytics and intuitive visualizations, Ride Share Analytics empowers companies to make data-driven decisions, leading to increased operational efficiency, cost savings, and a superior user experience for both drivers and passengers.
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-row items-center justify-center w-full flex-1 px-20">
          <PredictVolume/>
        </div>
      </div>
    </div>
  );
}
