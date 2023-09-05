import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
function EventCard({name,type,time,location,image}) {
  return (
    <Card
    
      shadow={false}
      className=" grid  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
      style={{ backgroundImage: `url(${image})` }}
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-nonebg-cover bg-center`}

      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12 bg-black bg-opacity-20">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {name}
        </Typography>
        <Typography variant="h3" className="mb-4 text-gray-400">
          {type}
        </Typography>
        <Typography variant="h4" className="mb-4 text-gray-400">
          {time}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {location}
        </Typography>
        
      </CardBody>
    </Card>
  )
}

export default EventCard