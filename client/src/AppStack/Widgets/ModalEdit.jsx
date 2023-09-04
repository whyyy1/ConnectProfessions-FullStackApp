import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, React } from "react";
function ModalEdit({ type, data,editChange,id}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editInput,setEditInput] = useState(data)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  async function updateInput(e) {
    e.preventDefault();
    editChange(id,editInput);
    closeModal()
        
  }

  function handleChange(event) {
    
      setEditInput(event.target.value)
    
  }

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="hover:bg-red-600 rounded-lg  bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <label className=" text-2xl">{id.toUpperCase()}</label>
            <p className="font-bold text-2xl">{data}</p>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center  p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6  align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2"></div>

                  <div className="mt-4">
                    <form className=" flex justify-evenly"
                      onSubmit={(e) => {
                        e.preventDefault();
                        updateInput(e);
                      }}
                    >
                        <div className="flex flex-col">
                    <label className="text-lg font-bold">{id.toUpperCase()}</label>
                      {id === "about" ? (
                        <textarea
                          type={type}
                          placeholder={data}
                          maxLength={40}
                          onChange={handleChange}
                          value={editInput}
                        ></textarea>
                      ) : (
                        <input
                          type={type}
                          placeholder={data}
                          
                          onChange={handleChange}
                          value={editInput}
                        />
                      )}
                      </div>
                      <button
                        type="submit"
                        className=" justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        update
                      </button>
                    </form>
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      exit
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default ModalEdit;
