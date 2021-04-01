import React from "react";
import { useHistory } from "react-router-dom";

export default function ListRoute({ dataList, path }) {
  const history = useHistory();

  return dataList
    ? dataList.map(item => (
      <div
        key={item.id}
        onClick={() => history.push(`${path}/${item.id}`)}
        className=" mr-2 py-1 px-2 hover:bg-blue-200 rounded-md"
      >
        {item.name}
      </div>
    ))
    : null;
}
