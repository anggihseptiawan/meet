import { Avatar, Box, HStack } from '@chakra-ui/react';

export default function ImageGroup  () {
  return(
    <Box ml={{md: -8, sm: 0}} flex="1" px={{md: 4, sm: 0}} pr={{md: 0, sm: 2}}>
      <Box>
        <Box display="flex" justifyContent="center">
          <Avatar name="person" width={{md: "100px", sm: "60px"}} height={{md: "100px", sm: "60px"}} src="https://bit.ly/dan-abramov" />
        </Box>
        <HStack display="flex" justifyContent="space-between" pt={6} mt={-10}>
          <Box>
            <Avatar
              name="person"
              width={{md: "100px", sm: "60px"}}
              height={{md: "100px", sm: "60px"}}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
          </Box>
          <Box>
            <Avatar
              name="person"
              width={{md: "100px", sm: "60px"}}
              height={{md: "100px", sm: "60px"}}
              src="https://images.unsplash.com/photo-1601412436967-8b2d90944ded?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
          </Box>
        </HStack>
      </Box>
      <Box mt={{md: "-60px", sm: "-30px"}}>
        <Box display="flex" justifyContent="center">
          <Avatar
            name="person"
            width={{md: "100px", sm: "60px"}}
            height={{md: "100px", sm: "60px"}}
            src="https://images.unsplash.com/photo-1576674498722-f4a79fc3f50a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          />
        </Box>
        <HStack display="flex" justifyContent="space-between" pt={6} mt={-10}>
          <Box>
            <Avatar
              name="person"
              width={{md: "100px", sm: "60px"}}
              height={{md: "100px", sm: "60px"}}
              src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
          </Box>
          <Box>
            <Avatar
              name="person"
              width={{md: "100px", sm: "60px"}}
              height={{md: "100px", sm: "60px"}}
              src="https://images.unsplash.com/photo-1598461947262-153e592d4e72?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}
