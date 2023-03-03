import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white/50 dark:bg-gray-600/50 backdrop-blur dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Individual" title="Experience Breakdown" />
    <div className="w-full flex justify-center">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;