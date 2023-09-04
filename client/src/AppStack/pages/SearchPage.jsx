import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

function SearchPage() {
  const [userData, setUserData] = useState([]);
  const [filterState, setFilterState] = useState(userData);
  const [searchUser, setSearchUser] = useState("");

  const tabs = ["Name", "Course"];

  const navigate = useNavigate();

  function handleChange(event) {

      setSearchUser(event.target.value);
      let filterUsers = userData.filter((user) => {
        return (
          user.firstName.includes(event.target.value) ||
          user.lastName.includes(event.target.value)
        );
      });
      
      if (event.target.value.length < 2) {
        setFilterState(userData);
      } else {
        setFilterState(filterUsers);
      }

      
    }
  

  useEffect(() => {
    const getUsers = async () => {
      // Your asynchronous code here
      try {
        const response = await axios.get("http://localhost:5000/cp/users");
        setUserData(response.data);
        // Process the data or update state here
      } catch (error) {
        console.log(error.message);
      }
    };

    getUsers(); // Call the async function

    // // You can also return a cleanup function if needed
    // return () => {
    //   // Cleanup code
    // };
  }, []);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            {/* <TabsHeader> */}
            {/* tabs */}
            {/* </TabsHeader> */}
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              value={searchUser}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={handleChange}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <div className="flex justify-evenly">
                {tabs.map((tab, index) => {
                  return <h1>{tab}</h1>;
                })}
              </div>
            </tr>
          </thead>
          <tbody>
            <div className="flex flex-col  ">
              {}
              {filterState.map((user) => {
                console.log(user._id);
                return (
                  <button
                    className="hover:cursor-pointer flex justify-evenly"
                    id={user._id}
                    onClick={(e) => {
                      console.log(e.target.id);
                      navigate(`/profile/view/${e.target.id}`, {
                        state: { user },
                      });
                    }}
                  >
                    <h1 id={user._id}>
                      {user.firstName} {user.lastName}
                    </h1>
                    <h1 id={user._id}>{user.course}</h1>
                  </button>
                );
              })}
            </div>
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SearchPage;
