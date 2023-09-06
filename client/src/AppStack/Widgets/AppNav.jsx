import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
function AppBar({name, type, id }) {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="bottom-0 fixed">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
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
            <div className="flex h-full items-center  p-4 text-center">
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
                    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                      <div className="mb-2 p-4">
                        <Typography variant="h5" color="blue-gray">
                          Hello {name},
                        </Typography>
                      </div>
                      <List>
                        <ListItem
                          onClick={() => {
                            navigate(`/home/${id}`);
                            closeModal()
                          }}
                        >
                          <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                          </ListItemPrefix>
                          Home
                        </ListItem>

                        <ListItem
                          onClick={() => {
                            navigate(`/profile/${id}`);
                            closeModal()
                          }}
                        >
                          <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                          </ListItemPrefix>
                          Profile
                        </ListItem>

                        <ListItem
                          onClick={() => {
                            navigate(`/search/${id}`);
                            closeModal()
                          }}
                        >
                          <ListItemPrefix>
                            <MagnifyingGlassIcon className="h-5 w-5" />
                          </ListItemPrefix>
                          Search
                        </ListItem>
                        <ListItem
                          onClick={() => {
                            navigate("/logout");
                            closeModal()
                          }}
                        >
                          <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                          </ListItemPrefix>
                          Log Out
                        </ListItem>
                      </List>
                    </Card>

                   
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

export default AppBar;
