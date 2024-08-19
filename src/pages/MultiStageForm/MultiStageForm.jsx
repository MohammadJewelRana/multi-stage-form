import { useState } from "react";
import { FaBox, FaWarehouse, FaCamera, FaCheckCircle } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import ProductDetails from "./ProductDetails";
import InventoryDetails from "./InventoryDetails";
import AddPhoto from "./AddPhoto";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import Swal from "sweetalert2";

const MultiStageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    regularPrice: "",
    extraPrice: "",
    taxAmount: "",
    weight: "",
    length: "",
    height: "",
    width: "",
    totalStock: "",
    photos: [],
  });

  const dispatch = useDispatch();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(addProduct({ id: Date.now(), ...formData }));
          Swal.fire({
            title: "Added!",
            text: "Your Product has been Added.",
            icon: "success",
          });

          // setStep(1);
          // setFormData({});
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message || 'Something went wrong!',
          });
        }
      }  
    });
  };

  const steps = [
    { title: "Product Details", icon: <FaBox /> },
    { title: "Inventory Details", icon: <FaWarehouse /> },
    { title: "Add Photo", icon: <FaCamera /> },
    { title: "Review", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="  max-w-7xl mx-auto  rounded-lg   mt-12 p-4">
      {/* Step Indicator */}
      <div className="flex flex-col items-center justify-between gap-2 md:gap-12 sm:flex-row sm:items-center   mb-6  ">
        {steps.map((stepData, index) => (
          <div
            key={index}
            className={`flex items-center w-[300px] bg-gray-100 px-4 py-4 rounded-md shadow-lg shadow-green-300   ${
              step === index + 1 ? "bg-green-700  " : "bg-gray-200"
            } `}
            // className="flex items-center w-[300px] bg-gray-100 px-4 py-4 rounded-md shadow-lg shadow-green-300"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full text-white 
              ${step === index + 1 ? "border  border-white" : "bg-gray-400"}
              shadow-lg`}
            >
              {stepData.icon}
            </div>
            <span
              className={`ml-2 text-sm sm:text-base font-semibold ${
                step === index + 1 ? "text-white " : " text-black"
              }`}
            >
              {stepData.title}
            </span>
            {index < steps.length - 1 && (
              <MdArrowForward className="hidden sm:block mx-4 text-gray-500" />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {step === 1 && (
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <ProductDetails
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
            />
          </div>
        )}
        {step === 2 && (
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <InventoryDetails
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>
        )}
        {step === 3 && (
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <AddPhoto
              formData={formData}
              setFormData={setFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>
        )}
        {step === 4 && (
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <Review
              formData={formData}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStageForm;
