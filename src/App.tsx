import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import "./App.css";
import { fetchRandomUser } from "./utils/api";
import { Name, UserState } from "./types";

function App() {
  const [userDetails, setUserDetails] = useState<UserState>({
    name: "",
    email: "",
  });

  const getMeUserDetails = async () => {
    const { name, email }: { name: Name; email: string } =
      await fetchRandomUser();
    const fullName = `${name.first} ${name.last}`;
    setUserDetails({
      name: fullName,
      email,
    });
  };

  useEffect(() => {
    getMeUserDetails();
  }, []);

  return (
    <Container as="div" className="App" height="100vh">
      <Box
        position="relative"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Card border="2px solid pink">
          <CardBody>
            <Stack divider={<StackDivider />}>
              <Box>
                <Heading>Name</Heading>
                <Text>{userDetails.name}</Text>
              </Box>
              <Box>
                <Heading>Email</Heading>
                <Text>{userDetails.email}</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Button
          mt="3"
          onClick={getMeUserDetails}
          colorScheme="pink"
          rightIcon={<RepeatIcon />}
        >
          Refresh User
        </Button>
      </Box>
    </Container>
  );
}

export default App;
