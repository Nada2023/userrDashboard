import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import { TbUserCircle } from "react-icons/tb";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaEye } from "react-icons/fa";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    paddingTop: 10,
    renderCell: (params) => (
      <Box display="flex" alignItems="center"   paddingTop= "15px">
        <TbUserCircle
          style={{
            marginRight: "8px",
            color: "purple",
            fontSize: "24px",
            borderRadius: "50%",
            // paddingTop: "5px",
          }}
        />
        <Typography variant="body2" style={{ fontWeight: "bold" }}>
          {params.value}
        </Typography>
      </Box>
    ),
  },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "email", headerName: "Mail", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        style={{
          backgroundColor: params.value === "Active" ? "#DCFCE7" : "white",
          color: params.value === "Active" ? "#15800D" : "#4B5563",
          // fontWeight: "bold",
          textTransform: "none",
          borderRadius: "2px",
          padding: "4px 12px",
        }}
      >
        {params.value}
      </Button>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: () => (
      <IconButton>
        {/* <MoreVertIcon /> */}
        <FaEye />
      </IconButton>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "John Carter",
    phone: "+20 111864238",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  {
    id: 2,
    name: "John Carter",
    phone: "+20 111864238",
    location: "United States",
    email: "john@google.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "John Carter",
    phone: "+20 111864238",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  {
    id: 4,
    name: "John Carter",
    phone: "+20 111864238",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  {
    id: 5,
    name: "John Carter",
    phone: "+20 111864238",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  {
    id: 6,
    name: "John Carter",
    phone: "+20 111864238",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  // {
  //   id: 7,
  //   name: "John Carter",
  //   phone: "+20 111864238",
  //   location: "United States",
  //   email: "john@google.com",
  //   status: "Active",
  // },
  // {
  //   id: 8,
  //   name: "John Carter",
  //   phone: "+20 111864238",
  //   location: "United States",
  //   email: "john@google.com",
  //   status: "Active",
  // },
  // {
  //   id: 9,
  //   name: "John Carter",
  //   phone: "+20 111864238",
  //   location: "United States",
  //   email: "john@google.com",
  //   status: "Active",
  // },
  // {
  //   id: 10,
  //   name: "John Carter",
  //   phone: "+20 111864238",
  //   location: "United States",
  //   email: "john@google.com",
  //   status: "Active",
  // },
];

const Table = () => {
  return (
    <Box className="py-4 ">
      <Paper
        style={{
          // height: "500px",
          padding: "16px",
          margin:"19px",
          
          // borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontSize: "24px",
            // fontWeight: "bold",
            paddingTop: "8px",
            paddingBottom: "8px",
            textAlign: "left",
            // fontWeight: "bold",
    
          }}
        >
          All Users
        </Typography>
        <DataGrid
        className="pt-5"
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#F3F4F6",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:nth-of-type(odd)": {
              backgroundColor: "#F9FAFB",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#E5E7EB",
            },
            "& .MuiPagination-root": {
              justifyContent: "center",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default Table;
