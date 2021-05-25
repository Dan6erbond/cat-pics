import { ChakraProvider, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Flex align="center" justify="flex-end">
              <Link as={RouterLink} to="/liked">
                Liked
              </Link>
            </Flex>
            <Switch>
              <Route path="/liked"></Route>
              <Route path="/"></Route>
            </Switch>
          </ChakraProvider>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
