import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Divider } from "antd";

export default function Table() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "SI",
        field: "si",
        width: 270,
      },
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Category",
        field: "position",
        width: 270,
      },
      {
        label: "Supplier name",
        field: "name",
        width: 200,
      },
      {
        label: "Cost Price",
        field: "salary",
        width: 100,
      },
      {
        label: "Price",
        field: "salary",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Unit",
        field: "age",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: [
      {
        si: "1",
        name: "Finn Camacho",
        position: "Support Engineer",
        office: "San Francisco",
        age: "47",

        salary: "$87",
      },
      {
        si: "2",
        name: "Serge Baldwin",
        position: "Data Coordinator",
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        si: "3",
        name: "Zenaida Frank",
        position: "Software Engineer",
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        si: "4",
        name: "Zorita Serrano",
        position: "Software Engineer",
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
      {
        si: "5",
        name: "Jennifer Acosta",
        position: "Junior Javascript Developer",
        office: "Edinburgh",
        age: "43",
        date: "2013/02/01",
        salary: "$75",
      },
      {
        si: "6",
        name: "Cara Stevens",
        position: "Sales Assistant",
        office: "New York",
        age: "46",
        date: "2011/12/06",
        salary: "$145",
      },
      {
        si: "7",
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356",
      },
      {
        si: "8",
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103",
      },
      {
        si: "9",
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86",
      },
      {
        si: "10",
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183",
      },
    ],
  });

  return (
    <div>
      <Divider style={{ fontSize: "1.5rem", color: "#42a5c3" }}>Table</Divider>
      <div className="container">
        <MDBDataTableV5
          hover
          entriesOptions={[5, 10, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={datatable}
          materialSearch
        />
      </div>
    </div>
  );
}
