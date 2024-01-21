// import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Header from '@/app/ui/header';
import  Duration  from '@/app/ui/analytics/fares/duration';
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
  return (
    <main>
      <div >
        <Duration />
      </div>
    </main>
  );
}