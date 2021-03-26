import React from "react";
import EditCustomer from "modules/customers/components/edit-customer";

function CustomerEdit() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <EditCustomer />
      </div>
    </div>
  );
}

export default CustomerEdit;
