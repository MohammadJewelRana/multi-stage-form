 /* eslint-disable react/prop-types */
import Heading from '../Shared/Heading';

const ReviewPage = ({ formData, onBack, onSubmit }) => {
  return (
    <div className="max-w-7xl mx-auto md:p-8 lg:p-10">
      <Heading
        heading={"Review Your Product Information"}
        subHeading={"Please review the details below before submitting."}
      />

      {/* Product Photos */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Product Photos</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {formData.photos && formData.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Product Photo ${index}`}
              className="w-32 h-32 object-cover border rounded-full"
            />
          ))}
        </div>
      </section>

      <div className="p-4 shadow-lg rounded-lg bg-white">
        {/* Product Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
          <div className="flex flex-col divide-y divide-gray-200">
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Title</div>
              <div className="w-1/2 break-words">{formData.title}</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Description</div>
              <div className="w-1/2 break-words">{formData.description}</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Category</div>
              <div className="w-1/2 break-words">{formData.category}</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Regular Price</div>
              <div className="w-1/2 break-words">${formData.regularPrice}</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Extra Price</div>
              <div className="w-1/2 break-words">${formData.extraPrice}</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Tax Amount</div>
              <div className="w-1/2 break-words">${formData.taxAmount}</div>
            </div>
          </div>
        </section>

        {/* Inventory Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Inventory Details</h2>
          <div className="flex flex-col divide-y divide-gray-200">
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Weight</div>
              <div className="w-1/2 break-words">{formData.weight} kg</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Length</div>
              <div className="w-1/2 break-words">{formData.length} cm</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Height</div>
              <div className="w-1/2 break-words">{formData.height} cm</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Width</div>
              <div className="w-1/2 break-words">{formData.width} cm</div>
            </div>
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
              <div className="w-1/2 font-medium">Total Stock</div>
              <div className="w-1/2 break-words">{formData.totalStock}</div>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-600 hover:bg-gray-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            title="Go back to previous step"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            title="Submit your product information"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
