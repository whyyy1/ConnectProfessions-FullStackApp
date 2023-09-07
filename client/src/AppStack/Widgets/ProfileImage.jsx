import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import {AdvancedImage} from '@cloudinary/react';

  export function ProfileCard({user}) {
    
    return (
      <Card className="m-5 ">
        <CardHeader floated={false} className="h-80">
          <div class='flex justify-center'>
          <img  src={user.image} alt={user.image}  />
          </div>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2 text-md md:text-xl">
            {user.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {user.type} / {user.course}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content={user.email}>
            <Typography
              as="a"
              href={`mailto: ${user.email}`}
              target="_blank"
              variant="lead"
              color="blue"
              textGradient
              className="mb-2 text-md md:text-xl"
            >
              Email
            </Typography>
          </Tooltip>
          <Tooltip content={user.github}>
            <Typography
              as="a"
              href={`${user.github}`}
              target="_blank"
              variant="lead"
              color="light-blue"
              textGradient
              className="mb-2 text-md md:text-xl"
            >
             GitHub
            </Typography>
          </Tooltip>
          <Tooltip content={user.linkedIn}>
            <Typography
              as="a"
              href={`${user.linkedIn}`}
              target="_blank"
              variant="lead"
              color="purple"
              textGradient
              className="mb-2 text-md md:text-xl"
            >
              LinkedIn
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }