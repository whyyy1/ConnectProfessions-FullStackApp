import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   
  export function ProfileCard({user}) {
    return (
      <Card className="m-5 ">
        <CardHeader floated={false} className="h-80">
          <img src={user.image} alt="profile-picture" />
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
          <Tooltip content="Email">
            <Typography
              as="a"
              href="#"
              variant="lead"
              color="blue"
              textGradient
              className="mb-2 text-md md:text-xl"
            >
              {user.email}
            </Typography>
          </Tooltip>
          <Tooltip content="Github">
            <Typography
              as="a"
              href="#"
              variant="lead"
              color="light-blue"
              textGradient
              className="mb-2 text-md md:text-xl"
            >
              {user.github}
            </Typography>
          </Tooltip>
          <Tooltip content="LinkedIn">
            <Typography
              as="a"
              href="#"
              variant="lead"
              color="purple"
              textGradient
              className="mb-2 text-md md:text-xl"
            >
              {user.linkedIn}
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }