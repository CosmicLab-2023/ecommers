"use client";

import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

function OrdersTable() {
  const columnHelper = useMemo(() => createColumnHelper(), []);

  
  const defaultData = [
    {
      id: "9284",
      productAmount: 5,
      priceAmount: 24,
      orderStatus: "success",
    },
    {
      id: "92684",
      productAmount: 5,
      priceAmount: 24,
      orderStatus: "failed",
    },
    {
      id: "92894",
      productAmount: 5,
      priceAmount: 24,
      orderStatus: "pending",
    },
    {
      id: "92864",
      productAmount: 5,
      priceAmount: 24,
      orderStatus: "pied",
    },
  ];

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Order Id</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.productAmount, {
      id: "productAmount",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Product Amount</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.priceAmount, {
      id: "priceAmount",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Price Amount</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.orderStatus, {
      id: "orderStatus",
      cell: (info) => (
        <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
          {info.getValue()}
        </span>
      ),
      header: () => <span>Order Status</span>,
      footer: (info) => info.column.id,
    }),
  ];

  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full h-full flex flex-col gap-4 my-4 md:my-8">
      <div className="flex justify-start md:justify-center">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          Orders List
        </div>
      </div>
      <div class="overflow-hidden rounded dark:bg-slate-900 shadow-md">
        <table className="w-full border-collapse  text-left text-sm ">
          <thead class="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    class="px-6 py-4 font-medium"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-400 dark:divide-slate-800 border-t border-slate-400 dark:border-slate-800">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-400 dark:hover:bg-slate-800">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    class="px-6 py-4 font-medium "
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
