import { Box, Container, Flex, Text, VStack, Link, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Flex>
          <Link href="#" margin="0 1rem" color="white">Home</Link>
          <Link href="#" margin="0 1rem" color="white">About</Link>
          <Link href="#" margin="0 1rem" color="white">Contact</Link>
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" padding="1rem" textAlign="center">
        <Text>&copy; 2023 MyApp. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;