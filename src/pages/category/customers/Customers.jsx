import React from "react";
import ListCustomer from "modules/customers/components/list-customer";
import CreateNewCustomer from "modules/customers/components/create-new-customer";

function Customers() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewCustomer />
        <ListCustomer />
      </div>
    </div>
  );
}

export default Customers;
