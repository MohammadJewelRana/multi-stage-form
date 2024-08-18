/* eslint-disable react/prop-types */
const Heading = ({heading,subHeading}) => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
          {heading}
        </h1>
        <p className="text-gray-600 capitalize">
           {subHeading}
        </p>
      </div>
    );
  };
  
  export default Heading;
  