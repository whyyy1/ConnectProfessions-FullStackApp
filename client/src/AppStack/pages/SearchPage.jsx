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

  const tabs = ["Name", "Course","Email"];

  const navigate = useNavigate();

  function handleChange(event) {

      setSearchUser(event.target.value);
      let filterUsers = userData.filter((user) => {
        return (
          user.firstName.includes(event.target.value) ||
          user.lastName.includes(event.target.value)
        );
      });
      
      if (event.target.value.length < 1) {
        setFilterState(userData);
      } else {
        setFilterState(filterUsers);
      }

      
    }
  

  useEffect(() => {
    const getUsers = async () => {
    
      try {
        
        const response = await axios.get(`https://fp-server-ox4k.onrender.com/cp/users`);
        console.log(response)
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
    <div className="flex flex-col">
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray" className="mt-1 font-bold text-xl">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-xl">
              See information about all members - Showing 10 users by default
            </Typography>
          </div>
          
        </div>
        <div className="flex flex-col items-center justify-between gap-4 ">
          <Tabs value="all" className="w-full md:w-max">
            {/* <TabsHeader> */}
            {/* tabs */}
            {/* </TabsHeader> */}
          </Tabs>
          <div className="w-1/2 ">
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
              <div className="flex  ">
                {tabs.map((tab, index) => {
                  return <h1 key={index} className="text-lg lg:text-xl font-bold">{tab}/</h1>;
                })}
              </div>
            </tr>
          </thead>
          
          <tbody className="flex justify-evenly flex-col md:p-10 text-center ">
            
        
              {filterState.slice(0,10).map((user,index) => {
                
                
                return (
                  <div
                  key={index}
                    className="w-11/12 bg-blue-300 hover:cursor-pointer flex justify-evenly hover:bg-yellow-200 bg-opacity-20 m-4  p-5"
                    id={user._id}
                    onClick={(e) => {
                      console.log(e.target.id);
                      navigate(`/profile/view/${e.target.id}`, {
                        state: { user },
                      });
                    }}
                  >
                    <div className="  flex flex-col  ">
                    <h1 className='text-lg lg:text-2xl'id={user._id}>
                      {user.firstName.toUpperCase()} 
                    </h1>
                    <h1 className='text-lg lg:text-2xl'id={user._id}>
                       {user.lastName.toUpperCase()}
                    </h1>
                    </div>
                    <div className="  flex flex-col ">
                    {user.course === ''?<h1 className='text-lg lg:text-2xl' id={user._id}>n/a</h1>:<h1 className='text-lg lg:text-2xl' id={user._id}>{user.course}</h1> }
                    </div>
                    <div className=" flex flex-col ">
                    <h1 className='text-lg lg:text-2xl' id={user._id}>{user.email}</h1>
                    </div>
                    <div className="divider"></div> 
                    
                  </div>
                );
                
              })}
            
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        {/* <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div> */}
        
            <Button onClick={()=>getUsers()}variant="outlined" size="sm">
              view all
            </Button>
            
          
      </CardFooter>
    </Card>
    </div>
  );
}

export default SearchPage;
