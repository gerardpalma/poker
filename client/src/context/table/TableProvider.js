import React from 'react';
import TableContext from './tableContext';
import useCreateAndDeleteTable from '../../hooks/useCreateAndDeleteTable';

const TableProvider = ({ children }) => {
  const [createTable, getCurrentTable] = useCreateAndDeleteTable();

  return (
    <TableContext.Provider
      value={{ createTable, getCurrentTable }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
