import * as React from "react";

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

// TableRow = ({
//               heading,
//               value
//             }: {
//   heading: string;
//   value: string | number;
// })

type TableProps = {
  [key: string]: string | number;
};

export const TableRow = ({ heading, value }: TableProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
