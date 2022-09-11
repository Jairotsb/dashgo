import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});



const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2022-09-10T00:00:00.000Z',
            '2022-09-11T00:00:00.000Z',
            '2022-09-12T00:00:00.000Z',
            '2022-09-13T00:00:00.000Z',
            '2022-09-14T00:00:00.000Z',
            '2022-09-15T00:00:00.000Z',
            '2022-09-16T00:00:00.000Z',
            '2022-09-17T00:00:00.000Z',
        ]

    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },

    },
};

const series = [
    { name: 'series1', data: [31, 120, 10, 18, 61, 95, 10, 110] }
];

export default function DashBoard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text>Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />

                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    //pb="4"
                    >
                        <Text>Taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                </SimpleGrid>

            </Flex>
        </Flex>
    );
}