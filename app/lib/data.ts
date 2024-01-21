import { createPool, sql } from '@vercel/postgres';
import {
  Fare
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function getFare(pickupID: number, DropID: number) {

  console.log({
      POSTGRES_URL: process.env.POSTGRES_URL,
     POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
    });
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  // noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Fare>`SELECT fare FROM fares WHERE fares.pickupID = ${pickupID} AND fares.DropID = ${DropID}`;
    console.log(data.rows);
    const fareFormatted =  formatCurrency(data.rows[0].fare);


    // console.log('Data fetch completed after 3 seconds.');

    return fareFormatted;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}