import React, { useEffect } from "react";
import "./list.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = (props) => {
  let rows = [];

  rows = props.program1Details;
  useEffect(() => {
    console.log(props.program1Details);
    props.program1Details.map((res) => {
      rows.push(res);
    });
    console.log(rows);
  }, []);

  // const rows = [
  //   {
  //     id: 121212,
  //     title: " Hello there",
  //     img: "https://images.pexels.com/photos/518895/pexels-photo-518895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     author: "Jack",
  //     date: "1 March",
  //     tags: "nature, black",
  //     status: "Pending",
  //   },
  //   {
  //     id: 121212,
  //     title: " Hello there",
  //     img: "https://images.pexels.com/photos/518895/pexels-photo-518895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     author: "Jack",
  //     date: "1 March",
  //     tags: "nature, black",
  //     status: "Approved",
  //   },
  //   {
  //     id: 121212,
  //     title: " Hello there",
  //     img: "https://images.pexels.com/photos/518895/pexels-photo-518895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     author: "Jack",
  //     date: "1 March",
  //     tags: "nature, black",
  //     status: "Approved",
  //   },
  //   {
  //     id: 121212,
  //     title: " Hello there",
  //     img: "https://images.pexels.com/photos/518895/pexels-photo-518895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     author: "Jack",
  //     date: "1 March",
  //     tags: "nature, black",
  //     status: "Approved",
  //   },
  //   {
  //     id: 121212,
  //     title:
  //       " Hello theresnflmsdlfnlsdnfknsdfkjnsdkjfnksndfkndkfndknknknknknknknknknknknknknknknknknknknknknknksdfhkjsdfkjsndfkjbsdkjfbkjsdbfksbdfkjbsdkjfbsdhfbdsfvhsdfdsbjhnknknknknknjxndvlnsdkvnkldsnfksdnfnsdfnk",
  //     img: "https://images.pexels.com/photos/518895/pexels-photo-518895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     author: "Jack",
  //     date: "1 March",
  //     tags: "nature, black",
  //     status: "Pending",
  //   },
  // ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">NGO ID</TableCell>
            <TableCell className="tablecell">title</TableCell>
            <TableCell className="tablecell">Representative</TableCell>
            {/* <TableCell className="tablecell">Date</TableCell> */}
            <TableCell className="tablecell">Verification Status</TableCell>
            <TableCell className="tablecell">tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 10).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.title.slice(0, 30)}..
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.author}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>{" "}
              </TableCell>
              <TableCell className="tablecell">{row.tags}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
