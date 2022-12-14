import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { NotificationNav } from "./NotificationNav";
import { SearchBox } from "./SearchBox";
import Profile from "./Profile";
import { Logo } from "./Logo";

export default function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,

    });
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>

        </Flex>
    );
}