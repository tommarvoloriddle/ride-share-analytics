// import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Header from '@/app/ui/header';
import  Fares  from '@/app/ui/analytics/fares/fares';
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
      <div >
        <Fares />
      </div>
    </main>
  );
}