import React from 'react';
import { isWithinRange } from 'date-fns';

const isCancelled = sailing_status => sailing_status === 'Cancelled';
const isOnTime = sailing_status => sailing_status === 'On Time';

const isDelayed = sailing_status =>
  !['On Time', 'Cancelled', '', null, undefined].includes(sailing_status);

const isCurrent = ({ sailing_status, eta, actual_departure }) =>
  eta &&
  actual_departure &&
  !['Cancelled', '', null, undefined].includes(sailing_status) &&
  isWithinRange(new Date(), new Date(actual_departure), new Date(eta));

const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em" className='ml-2 fill-current'><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>


const Cancelled = () => (
  <div>
    <span className="bg-red-lightest text-red-dark rounded-full px-4 py-2 ">
      Cancelled
    </span>
  </div>
);
const Delayed = () => (
  <div>
    <span className="bg-yellow-lightest text-yellow-dark rounded-full px-4 py-2 ">
      Delayed
    </span>
  </div>
);
const Current = () => (
  <div>
    <span className="bg-blue-lightest text-blue-dark rounded-full px-4 py-2 ">
      In Progress
    </span>
  </div>
);
const OnTime = () => (
  <div>
    <span className="bg-green-lightest text-green-dark rounded-full px-4 py-2 ">
      On Time
    </span>
  </div>
);

export default ({ sailing_status, eta, actual_departure }) => (
  <div className="text-right">
    {/* <Cancelled />
    <Delayed />
    <Current /> */}
    {isCancelled(sailing_status) && <Cancelled />}
    {isOnTime(sailing_status) && <OnTime />}
    {isDelayed(sailing_status) && <Delayed />}
    {/* {isCurrent({ sailing_status, eta, actual_departure }) && <Current />} */}
  </div>
);
