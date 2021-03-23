import React from "react";
import DetailCustomer from "modules/customers/components/detail-customer";

function CustomerDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <DetailCustomer />
      </div>
    </div>
  );
}

export default CustomerDetail;
