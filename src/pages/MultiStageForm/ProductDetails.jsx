 /* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Heading from "../Shared/Heading";

const ProductDetails = ({ formData, setFormData, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    console.log(data);

    onNext();
  };

  return (
    <div>
      <Heading
        heading={"Please Provide Basic Product Information"}
        subHeading={
          "Fill out the details below to get started with adding your product."
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 shadow-lg rounded-lg bg-white"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Title
          </label>
          <input
            {...register("title", { required: "Product title is required" })}
            placeholder="Product Title"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Description"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-xs italic">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            {...register("category", { required: "Category is required" })}
            placeholder="Category"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.category ? "border-red-500" : ""
            }`}
          />
          {errors.category && (
            <p className="text-red-500 text-xs italic">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Regular Price
          </label>
          <input
            type="number"
            step="0.01"
            {...register("regularPrice", {
              required: "Regular price is required",
              valueAsNumber: true,  
              min: { value: 0, message: "Price must be a positive number" },
            })}
            placeholder="Regular Price"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.regularPrice ? "border-red-500" : ""
            }`}
          />
          {errors.regularPrice && (
            <p className="text-red-500 text-xs italic">
              {errors.regularPrice.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Extra Price
          </label>
          <input
            type="number"
            step="0.01"
            {...register("extraPrice", {
              required: "Extra price is required",
              valueAsNumber: true, 
              min: { value: 0, message: "Price must be a positive number" },
            })}
            placeholder="Extra Price"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.extraPrice ? "border-red-500" : ""
            }`}
          />
          {errors.extraPrice && (
            <p className="text-red-500 text-xs italic">
              {errors.extraPrice.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tax Amount
          </label>
          <input
            type="number"
            step="0.01"
            {...register("taxAmount", {
              required: "Tax amount is required",
              valueAsNumber: true,  
              min: { value: 0, message: "Tax amount must be a positive number" },
            })}
            placeholder="Tax Amount"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.taxAmount ? "border-red-500" : ""
            }`}
          />
          {errors.taxAmount && (
            <p className="text-red-500 text-xs italic">
              {errors.taxAmount.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            title="Go to next step"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
