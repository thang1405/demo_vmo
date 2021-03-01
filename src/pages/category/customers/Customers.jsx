import React from "react";
import TableCustomer from "../../../modules/customers/components/table-customer";
import CreateNewCustomer from "../../../modules/customers/components/create-new-customer";

function Customers() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-0">
        <CreateNewCustomer />
        <TableCustomer />
      </div>
    </div>
  );
}

export default Customers;
