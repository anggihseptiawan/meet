import Head from 'next/head';
import { Text, Box, SimpleGrid, Container, Avatar, HStack, Button, Flex } from '@chakra-ui/react';
// import styled from "@emotion/styled"

// const ImageWrapper = styled.div`
//   margin-top: -40px;
// `;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxW="container.xl">
          <Box p={6}>
            <Text fontSize="2xl" fontWeight="bold" align="center">
              👋 meet
            </Text>
          </Box>

          <SimpleGrid columns={{ md: 3, sm: 1 }} spacing="40px">
            <Box>
              <Box>
                <Avatar name="person" size="lg" src="https://bit.ly/dan-abramov" />
              </Box>
              <HStack pt={6}>
                <Box ml={-8} mr={6}>
                  <Avatar name="person" size="lg" src="https://bit.ly/dan-abramov" />
                </Box>
                <Box>
                  <Avatar name="person" size="lg" src="https://bit.ly/dan-abramov" />
                </Box>
              </HStack>
            </Box>
            <Box pt={10}>
              <Text fontWeight="bold" fontSize="5xl" align="center" style={{ lineHeight: 1.2 }} pb={4}>
                Group Chat for Everyone
              </Text>
              <Text color="gray.400">
                Meet makes it easy to others face to face virtually and collaborate across any device
              </Text>
              <Flex justify="center" py={4}>
                <Button mr={2}>Download</Button>
                <Button colorScheme="teal">What is it ?</Button>
              </Flex>
            </Box>
            <Box>
              <Box ml={8}>
                <Avatar name="person" size="lg" src="https://bit.ly/dan-abramov" />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </main>
    </div>
  );
}
