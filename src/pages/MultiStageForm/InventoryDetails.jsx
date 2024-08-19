 /* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Heading from "../Shared/Heading";

const InventoryDetails = ({ formData, setFormData, onNext, onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };

  return (
    <div>
      <Heading
        heading={"Provide Inventory Details"}
        subHeading={"Enter the details for inventory management below."}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 shadow-lg rounded-lg bg-white"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Weight
          </label>
          <input
            type="number"
            step="0.01"
            {...register("weight", { required: "Weight is required" })}
            placeholder="Weight"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.weight ? "border-red-500" : ""
            }`}
          />
          {errors.weight && (
            <p className="text-red-500 text-xs italic">
              {errors.weight.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Length
          </label>
          <input
            type="number"
            step="0.01"
            {...register("length", { required: "Length is required" })}
            placeholder="Length"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.length ? "border-red-500" : ""
            }`}
          />
          {errors.length && (
            <p className="text-red-500 text-xs italic">
              {errors.length.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Height
          </label>
          <input
            type="number"
            step="0.01"
            {...register("height", { required: "Height is required" })}
            placeholder="Height"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.height ? "border-red-500" : ""
            }`}
          />
          {errors.height && (
            <p className="text-red-500 text-xs italic">
              {errors.height.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Width
          </label>
          <input
            type="number"
            step="0.01"
            {...register("width", { required: "Width is required" })}
            placeholder="Width"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.width ? "border-red-500" : ""
            }`}
          />
          {errors.width && (
            <p className="text-red-500 text-xs italic">
              {errors.width.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Total Stock
          </label>
          <input
            type="number"
        
            {...register("totalStock", { required: "Total stock is required" })}
            placeholder="Total Stock"
            className={`shadow appearance-none border rounded w-full text-lg py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.totalStock ? "border-red-500" : ""
            }`}
          />
          {errors.totalStock && (
            <p className="text-red-500 text-xs italic">
              {errors.totalStock.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-600 hover:bg-gray-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            title="Go back to previous step"
          >
            Back
          </button>
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

export default InventoryDetails;
