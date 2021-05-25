import { ChakraProvider, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Cats from "./pages/cats";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Flex align="center" py={4} px={6} shadow="base">
              <Heading size="lg">Cats API</Heading>
              <Spacer />
              <Link as={RouterLink} to="/liked" color="blue.500">
                Liked
              </Link>
            </Flex>
            <Switch>
              <Route path="/liked" />
              <Route path="/" component={Cats} />
            </Switch>
          </ChakraProvider>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
