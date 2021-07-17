import { Avatar, Box, HStack } from '@chakra-ui/react';

export default function ImageGroup  () {
  return(
    <Box ml={{md: -8, sm: 0}} flex="1" px={{md: 4, sm: 0}} pr={{md: 0, sm: 1}}>
      <Box>
        <Box display="flex" justifyContent="center">
          <Avatar name="person" width={{md: "100px", sm: "60px"}} height={{md: "100px", sm: "60px"}} src="https://images.unsplash.com/photo-1620713598996-ca76577be34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNtaWxleSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
        </Box>
        <HStack display="flex" justifyContent="space-between" pt={6} mt={-10}>
          <Box>
            <Avatar
              name="person"
              width={{md: "100px", sm: "60px"}}
              height={{md: "100px", sm: "60px"}}
              src="https://images.unsplash.com/photo-1610462534044-5349e2261b86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNtaWxleSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
          </Box>
          <Box>
            <Avatar
              name="person"
              width={{md: "100px", sm: "60px"}}
              height={{md: "100px", sm: "60px"}}
              src="https://images.unsplash.com/photo-1618544976315-07c3ab932594?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNtaWxleSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
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
              src="https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHNtaWxleSUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            />
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}
