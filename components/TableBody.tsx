import React, { FC } from 'react';

import { Team } from 'models/Team';
import { Driver } from 'models/Driver';

type Props = {
  items?: Array<Team | Driver>;
};


const TableBody: FC<Props> = ({ items = [] }) => {

  const keys = items.length > 0 ? Object.keys(items[0]) : []

  return (
    <tbody>
      {items.map(item => (
        <tr key={item.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {keys.map(key => {
            // Todo: simplify this, make separate components TableRowTeam, TableRowDriver         
            // @ts-ignore
            const value = item[key];       
            return (
              <td key={key} className="px-6 py-4">
                  { value }
              </td>
            )}
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;