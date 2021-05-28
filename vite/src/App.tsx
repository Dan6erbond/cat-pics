import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Cats from "./pages/index";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Layout>
              <Switch>
                <Route path="/liked" />
                <Route path="/" component={Cats} />
              </Switch>
            </Layout>
          </ChakraProvider>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
