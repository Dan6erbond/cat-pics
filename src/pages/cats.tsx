import { Box, Heading, VStack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";
import { QueryFunction, useInfiniteQuery } from "react-query";
import type { Cat } from "../types";

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
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<Cat[]>("cats", fetchCats, {
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  console.log(data);

  return (
    <Box p={[4, 8]}>
      <Heading>Cats</Heading>
      <VStack>
        <Box p={2} rounded="sm" shadow="sm">
          <Skeleton w="full" h="32" />
        </Box>
      </VStack>
    </Box>
  );
}
