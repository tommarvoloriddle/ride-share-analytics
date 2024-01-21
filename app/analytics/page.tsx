"use client"
// import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Header from '../ui/header';
import PredictForm from "@/app/ui/analytics/fares/PredictForm";
import PredictVolume from "@/app/ui/analytics/fares/PredictVolume";
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
//   const revenue = await fetchRevenue();
//   const latestInvoices = await fetchLatestInvoices();
//   const cardData = await fetchCardData();
//   const numberOfCustomers = cardData.numberOfCustomers;
//   const numberOfInvoices = cardData.numberOfInvoices;
//   const totalPendingInvoices = cardData.totalPendingInvoices;
//   const totalPaidInvoices = cardData.totalPaidInvoices;
  return (
    <main>
      <Header value='Ride Share Analytics'/>
      <div style={{ textAlign: 'center', color: '#40340' ,margin: '2rem' }}>
      <div style={{ textAlign: 'center', color: '#40340' ,margin: '2rem' }}>
        <p >
          Ride Share Analytics is a comprehensive product that leverages advanced data analysis to provide valuable insights for the ride-sharing industry. By aggregating and analyzing large datasets from ride-sharing platforms, our product enables businesses to optimize routes, enhance driver efficiency, and improve overall service quality. With real-time analytics and intuitive visualizations, Ride Share Analytics empowers companies to make data-driven decisions, leading to increased operational efficiency, cost savings, and a superior user experience for both drivers and passengers.
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-row items-center justify-center w-full flex-1 px-20">
          <PredictForm />
        </div>
        <div className="flex flex-row items-center justify-center w-full flex-1 px-20">
          <PredictVolume />
        </div>
      </div>
      </div>

      
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div> */}
      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div> */}
    </main>
  );
}