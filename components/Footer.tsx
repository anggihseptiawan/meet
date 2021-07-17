import { Box, Button, Container, Link, SimpleGrid, Text } from '@chakra-ui/react';

export default function Footer () {
  return (
    <footer style={{position: "relative", background: `url("/images/footer.jpg")`}}>
    <Box py="16" mt="20" display="flex" _after={{ content: '""', position: "absolute", top: 0, left: 0, width: "100%",
    height: "100%", background: "#0da4c6d1",}}>
      <Container maxW="container.lg">
        <SimpleGrid columns={{md: 3, sm: 1}} style={{position: "relative", zIndex: 2}}>
          <Box mb="2">
            <Text fontWeight="bold" fontSize="3xl" lineHeight="1.2" color="white">Experience more together</Text>
          </Box>
          <Box mb="6">
            <Text color="white">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions</Text>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button py={6} px={8} colorScheme="purple" borderRadius="full" mr={2}>
                Download
                <Text as="span" ml={1} color="purple.100">
                  v1.2
                </Text>
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    <Box background="purple.500" py="4" position="relative" zIndex="2" opacity="0.9">
      <Container maxW="container.lg">
        <Text as="small" color="white">2021 Anggih Septiawan | Designed by <Link href="https://www.frontendmentor.io/" target="_blank">FrontendMentor</Link> </Text>
      </Container>
    </Box>
  </footer>
  )
}
