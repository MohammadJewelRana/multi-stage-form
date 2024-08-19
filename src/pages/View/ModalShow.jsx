 /* eslint-disable react/prop-types */
const ModalShow = ({ modalProduct }) => {
  
  console.log(modalProduct);
  
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-4 max-w-lg mx-auto">
          <h1 className="text-2xl font-semibold text-center my-4 text-gray-500">
            Product Details
          </h1>
          {modalProduct && (
            <div className="flex flex-col divide-y divide-gray-200">
              <div className="flex justify-center mb-4">
           
                  <img
                    src={modalProduct?.image}
                    alt={modalProduct.title}
                    className="w-48 h-48 object-cover rounded-t-lg border" />
              
               
              </div>

              <section className="mb-8">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Title</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.title}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Description</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.description}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Category</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.category}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Regular Price</div>
                    <div className="w-1/2 break-words">
                      ${modalProduct.regularPrice}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Extra Price</div>
                    <div className="w-1/2 break-words">
                      ${modalProduct.extraPrice}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Tax Amount</div>
                    <div className="w-1/2 break-words">
                      ${modalProduct.taxAmount}
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Weight</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.weight} kg
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Length</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.length} cm
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Width</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.width} cm
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Height</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.height} cm
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                    <div className="w-1/2 font-medium">Total Stock</div>
                    <div className="w-1/2 break-words">
                      {modalProduct.totalStock}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalShow;
