import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState,React } from 'react'
import { useNavigate } from "react-router-dom";
function NavBar({type}) {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  
  return (
    <>
      <div className='bottom-0 fixed' >
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

        </button>
      </div>

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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Navigate
                  </Dialog.Title>
                  <div className="mt-2">
                    {type === 'auth'? <><a onClick={()=>{navigate('/')}} class="dropdown-item text-sm">Home</a>
            <a onClick={()=>{navigate('/login')}} tabIndex="-1" class="dropdown-item text-sm">
              Login
            </a>
            <a onClick={()=>{navigate('/register')}} tabIndex="-1" class="dropdown-item text-sm">
              Register
            </a></>:<><a onClick={()=>{navigate('/home/:id')}} class="dropdown-item text-sm">Home</a>
            <a onClick={()=>{navigate('/profile/:id')}} tabIndex="-1" class="dropdown-item text-sm">
              Profile
            </a>
            <a onClick={()=>{navigate('/search/:id')}} tabIndex="-1" class="dropdown-item text-sm">
              Search
            </a>
            <a onClick={()=>{navigate('/logout')}} tabIndex="-1" class="dropdown-item text-sm">
              Logout
            </a></>}
                  
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
         
  );
}

export default NavBar;
