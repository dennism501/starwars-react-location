import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import {Router, Outlet, ReactLocation} from 'react-location'
import { routes } from '../src/routes'
// import { ReactLocationDevtools } from 'react-location-devtools'

const queryClient = new QueryClient()
const location = new ReactLocation()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
      <ReactQueryDevtools />
      {/* <ReactLocationDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
