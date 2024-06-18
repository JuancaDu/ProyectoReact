import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

interface ProviderProps{
    children: React.ReactNode;
}


const queryClient = new QueryClient();

const Providers: React.FC <ProviderProps>= ({children}) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
)

export default  Providers;