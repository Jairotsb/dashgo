import { Box, Drawer, DrawerOverlay, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SideBarNav";

export default function SideBar() {
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={true} placement="left" onClose={() => { }}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        );
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    );
}