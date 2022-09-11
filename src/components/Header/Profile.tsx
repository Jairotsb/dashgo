import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
    return (

        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Jairo Tunisse</Text>
                <Text color="gray.300">jairo_tunisse@outlook.com</Text>
            </Box>
            <Avatar size="md" name="Jairo Tunisse" src="https://www.github.com/jairotsb.png" />
        </Flex>


    );


}