/* eslint-disable react/prop-types */
import   { useState } from 'react';

const AddPhoto = ({ formData, setFormData, onNext, onBack }) => {
  const [photos, setPhotos] = useState(formData.photos || []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const previewUrls = files.map(file => URL.createObjectURL(file));
    setPhotos([...photos, ...previewUrls]);
  };

  const handleNext = () => {
    setFormData({ ...formData, photos });
    onNext();
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Preview ${index}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
        ))}
      </div>
      <button type="button" onClick={onBack}>Back</button>
      <button type="button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddPhoto;
