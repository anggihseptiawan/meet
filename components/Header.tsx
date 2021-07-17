import { Avatar, Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import ImageGroup from './ImageGroup';

export default function Header() {
  return (
    <>
      <header>
        <Box pt={6} pb={10}>
          <Text fontSize="2xl" fontWeight="bold" align="center">
            Meet 👋
          </Text>
        </Box>

        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <ImageGroup />
          <Box pt={10} flex="1" px="8" order={{md: 2, sm: 3}}>
            <Heading as="h1" fontWeight="800" fontSize="5xl" style={{ lineHeight: 1.2, textAlign: "center" }} pb={4}>
              Group Chat for Everyone
            </Heading>
            <Text color="gray.400" align="center">
              Meet makes it easy to others face to face virtually and collaborate across any device
            </Text>
            <Flex justify="center" py={8}>
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
          <Box mr={{md: -8, sm: 0}} flex="1" px={{md: 4, sm: 0}} pl={{md: 0, sm: 1}} order={{md: 3, sm: 2}}>
            <Box>
              <HStack display="flex" justifyContent="space-between" pt={12} mt={-10}>
                <Box>
                  <Avatar
                    name="person"
                    width={{md: "100px", sm: "60px"}}
                    height={{md: "100px", sm: "60px"}}
                    src="https://images.unsplash.com/photo-1619016984980-703b4cf09515?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxzbWlsZXklMjBmYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  />
                </Box>
                <Box>
                  <Avatar
                    name="person"
                    width={{md: "100px", sm: "60px"}}
                    height={{md: "100px", sm: "60px"}}
                    src="https://images.unsplash.com/photo-1609699856548-1fb7fa468f0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHxzbWlsZXklMjBmYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  />
                </Box>
              </HStack>
              <Box display="flex" justifyContent="center">
                <Avatar
                  name="person"
                  width={{md: "100px", sm: "60px"}}
                  height={{md: "100px", sm: "60px"}}
                  src="https://images.unsplash.com/photo-1614436201459-156d322d38c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNtaWxleSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
            </Box>
            <Box  mt={{md: "-60px", sm: "-50px"}}>
              <HStack display="flex" justifyContent="space-between" mt={-10}>
                <Box>
                  <Avatar
                    name="person"
                    width={{md: "100px", sm: "60px"}}
                    height={{md: "100px", sm: "60px"}}
                    src="https://images.unsplash.com/photo-1552256469-acf9fd4feb50?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                  />
                </Box>
                <Box>
                  <Avatar name="person"  width={{md: "100px", sm: "60px"}}
                  height={{md: "100px", sm: "60px"}} src="https://images.unsplash.com/photo-1611880147493-7542bdb0f024?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNtaWxleSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
                </Box>
              </HStack>
              <Box display="flex" justifyContent="center">
                <Avatar
                  name="person"
                  width={{md: "100px", sm: "60px"}}
                  height={{md: "100px", sm: "60px"}}
                  src="https://images.unsplash.com/flagged/photo-1568004614836-9a79797332da?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </header>
    </>
  );
}
