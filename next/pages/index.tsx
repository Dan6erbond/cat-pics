import { Image } from "@chakra-ui/image";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";
import { Cat } from "@typeDefs/cats";
import React from "react";
import { useInView } from "react-intersection-observer";
import { QueryFunction, useInfiniteQuery } from "react-query";

const url = "https://api.thecatapi.com/v1/images/search";

const fetchCats: QueryFunction<Cat[]> = async ({ pageParam }) => {
  const res = await fetch(
    `${url}?${new URLSearchParams({
      order: "DESC",
      limit: "25",
      page: pageParam,
    })}`
  );
  const json = await res.json();
  return json;
};

export default function Cats() {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    Cat[]
  >("cats", fetchCats, {
    getNextPageParam: (lastPage, pages) =>
      lastPage.length ? pages.length : undefined,
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage]);

  return (
    <Box p={[4, 8]}>
      {data && (
        <VStack spacing={[2, 4]}>
          {data.pages.flat().map(({ id, url }) => (
            <Flex
              p={2}
              rounded="sm"
              shadow="sm"
              w="full"
              h={[32, 48, 52, 64]}
              key={id}
              _hover={{ shadow: "md" }}
              cursor="pointer"
              align="stretch"
              justify="center"
            >
              <Image
                src={url}
                alt="Cat"
                maxH="full"
                mx="auto"
                fallback={
                  <Flex
                    align="center"
                    justify="center"
                    h="full"
                  >
                    <Spinner size="lg" />
                  </Flex>
                }
              />
            </Flex>
          ))}
        </VStack>
      )}
      <VStack spacing={[2, 4]}>
        {isFetching ? (
          <>
            <Box p={2} rounded="sm" shadow="sm" w="full">
              <Skeleton w="full" h={[32, 48, 52, 64]} />
            </Box>
            {[...new Array(4)].map((_, idx) => (
              <Box key={idx} p={2} rounded="sm" shadow="sm" w="full">
                <Skeleton w="full" h={[32, 48, 52, 64]} />
              </Box>
            ))}
          </>
        ) : (
          hasNextPage && (
            <Flex ref={ref} align="center" justify="center">
              <Spinner size="md" />
            </Flex>
          )
        )}
      </VStack>
    </Box>
  );
}
