import { Text, Box, SimpleGrid, Avatar, HStack, Button, Flex } from '@chakra-ui/react';

export default function Header() {
  return (
    <main>
      <Box p={6}>
        <Text fontSize="2xl" fontWeight="bold" align="center">
          👋 meet
        </Text>
      </Box>

      <SimpleGrid columns={{ md: 3, sm: 1 }} spacing="80px">
        <Box ml={-8}>
          <Box>
            <Box display="flex" justifyContent="center">
              <Avatar name="person" size="xl" src="https://bit.ly/dan-abramov" />
            </Box>
            <HStack display="flex" justifyContent="space-between" pt={6} mt={-10}>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1601412436967-8b2d90944ded?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
            </HStack>
          </Box>
          <Box style={{ marginTop: -60 }}>
            <Box display="flex" justifyContent="center">
              <Avatar
                name="person"
                size="xl"
                src="https://images.unsplash.com/photo-1576674498722-f4a79fc3f50a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              />
            </Box>
            <HStack display="flex" justifyContent="space-between" pt={6} mt={-10}>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1598461947262-153e592d4e72?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box pt={10}>
          <Text fontWeight="bold" fontSize="5xl" align="center" style={{ lineHeight: 1.2 }} pb={4}>
            Group Chat for Everyone
          </Text>
          <Text color="gray.400" align="center">
            Meet makes it easy to others face to face virtually and collaborate across any device
          </Text>
          <Flex justify="center" py={4}>
            <Button py={6} px={8} colorScheme="teal" borderRadius="full" mr={2}>
              Download
              <Text as="span" ml={1} color="teal.200">
                v1.2
              </Text>
            </Button>
            <Button py={6} px={8} colorScheme="purple" borderRadius="full">
              What is it ?
            </Button>
          </Flex>
        </Box>
        <Box mr={-8}>
          <Box>
            <HStack display="flex" justifyContent="space-between" pt={12} mt={-10}>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1598461947262-153e592d4e72?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1598461947262-153e592d4e72?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
            </HStack>
            <Box display="flex" justifyContent="center">
              <Avatar
                name="person"
                size="xl"
                src="https://images.unsplash.com/photo-1608513732982-e13d86139cb4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              />
            </Box>
          </Box>
          <Box style={{ marginTop: -60 }}>
            <HStack display="flex" justifyContent="space-between" mt={-10}>
              <Box>
                <Avatar
                  name="person"
                  size="xl"
                  src="https://images.unsplash.com/photo-1552256469-acf9fd4feb50?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
              <Box>
                <Avatar name="person" size="xl" src="https://bit.ly/dan-abramov" />
              </Box>
            </HStack>
            <Box display="flex" justifyContent="center">
              <Avatar
                name="person"
                size="xl"
                src="https://images.unsplash.com/flagged/photo-1568004614836-9a79797332da?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </main>
  );
}
