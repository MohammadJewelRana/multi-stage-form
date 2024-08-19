 /* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FaEye, FaTrash } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import { deleteProduct } from "../../redux/productSlice";
import { useState } from "react";
import ModalShow from "./ModalShow";
import Heading from "../Shared/Heading";

const ViewProducts = () => {
  const [modalProduct, setModalProduct] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Tooltip title={params.value} arrow>
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
      flex: 2,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "category",
      headerName: "Category",
      width: 120,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "regularPrice",
      headerName: "Regular Price",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "extraPrice",
      headerName: "Extra Price",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "taxAmount",
      headerName: "Tax Amount",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "weight",
      headerName: "Weight",
      width: 120,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "length",
      headerName: "Length",
      width: 120,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "width",
      headerName: "Width",
      width: 120,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "height",
      headerName: "Height",
      width: 120,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "totalStock",
      headerName: "Total Stock",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setModalProduct(params.row)}
            className="text-blue-600 hover:text-blue-800 mt-1"
            title="View"
          >
            <FaEye
              onClick={() =>
                document.getElementById("my_modal_2").showModal()
              }
            />
          </button>
          <button
            onClick={() => handleDelete(params.row.id)}
            className="text-red-600 hover:text-red-800"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    regularPrice: product.regularPrice || "N/A",
    extraPrice: product.extraPrice || "N/A",
    taxAmount: product.taxAmount || "N/A",
    weight: product.weight,
    length: product.length,
    width: product.width,
    height: product.height,
    totalStock: product.totalStock,
  }));

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem deleting the product. Please try again.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="mt-8 max-w-7xl mx-auto">
      <Heading
        heading={"Show All Products"}
        subHeading={"Show details and do operations... "}
      />

      <div className="overflow-x-auto">
        <Box sx={{ height: 520, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f0f0f0",
                textAlign: "center",
              },
              "& .MuiDataGrid-cell": {
                textAlign: "center",
                whiteSpace: "normal",
              },
              "@media (max-width: 768px)": {
                "& .MuiDataGrid-cell": {
                  fontSize: "0.75rem", // Smaller text size on small screens
                },
                "& .MuiDataGrid-columnHeaders": {
                  fontSize: "0.75rem", // Smaller header text size on small screens
                },
              },
            }}
          />
        </Box>
      </div>

      <ModalShow modalProduct={modalProduct} />
    </div>
  );
};

export default ViewProducts;
