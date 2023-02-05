import React, { FC } from 'react';

import TableHead from 'components/TableHead';
import TableBody from 'components/TableBody';
import { Team } from 'models/Team';
import { Driver } from 'models/Driver';

interface TableItem<T> {
    headItem: keyof T;
    bodyItem: T;
}

export type TableItemTeam = TableItem<Team>;
export type TableItemDriver = TableItem<Driver>;

type Props = {
  tableItems?: TableItemTeam[] | TableItemDriver[];
};

const Table: FC<Props> = ({ tableItems = [] }) => {

  const headItems = tableItems.map(({ headItem }) => headItem)
  const bodyItems = tableItems.map(({ bodyItem }) => bodyItem)

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">  
        <TableHead items={headItems} />
        <TableBody items={bodyItems} />
    </table>
  </div>
  );
};

export default Table;