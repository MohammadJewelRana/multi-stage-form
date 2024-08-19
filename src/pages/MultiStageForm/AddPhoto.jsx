 /* eslint-disable react/prop-types */
import { useState } from 'react';
import Heading from '../Shared/Heading';

const AddPhoto = ({ formData, setFormData, onNext, onBack }) => {
  const [photos, setPhotos] = useState(formData.photos || []);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPhotos(prevPhotos => [...prevPhotos, ...previewUrls]);
    setError(''); // Clear any previous errors
  };

  const handleRemovePhoto = (photoToRemove) => {
    setPhotos(photos.filter(photo => photo !== photoToRemove));
  };

  const handleNext = () => {
    if (photos.length === 0) {
      setError('Please select at least one photo.');
      return;
    }
    console.log(photos);
    
    setFormData({ ...formData, photos });
    onNext();
  };

  return (
    <div>
      <Heading
        heading={"Add Product Photos"}
        subHeading={"Upload multiple photos of your product for better visibility."}
      />

      <form
        className="mx-auto p-4 shadow-lg rounded-lg bg-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Photos
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required  
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-4 mt-12 items-center justify-center">
          {photos.map((photo, index) => (
            <div key={index} className="relative w-32 h-32">
              <img
                src={photo}
                alt={`Preview ${index}`}
                className="w-full h-full object-cover border rounded-full"
              />
              <button
                type="button"
                onClick={() => handleRemovePhoto(photo)}
                className="absolute top-0 right-2 bg-red-500 text-white rounded-full p-1 focus:outline-none hover:bg-red-600"
                title="Remove Photo"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
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
            onClick={handleNext}
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

export default AddPhoto;
