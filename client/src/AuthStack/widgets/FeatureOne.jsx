import React from "react";
import {
  Box,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
function FeatureOne({image,imageDes, title, bodyDesc, btnTitle}) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt={imageDes}
      />

      <Stack>
        <Box>
          <Heading size="md">{title}</Heading>

          <Text py="2">
            {bodyDesc}
          </Text>
        </Box>

        <Box>
          <Button variant="solid" colorScheme="blue">
            {btnTitle}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}

export default FeatureOne;
