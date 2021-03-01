import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
function CustomerDetail() {
  // const { id } = useParams();
  const detail = useSelector(state => state.customers.data);
  console.log(detail);
  return <div>hihi</div>;
}

export default CustomerDetail;
