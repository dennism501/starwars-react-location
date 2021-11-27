import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import {Router, Outlet, ReactLocation} from 'react-location'

const queryClient = new QueryClient()
const location = new ReactLocation()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
