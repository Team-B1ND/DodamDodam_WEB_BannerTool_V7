import { QueryClient, QueryClientProvider } from "react-query";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";
import PageTemplate from "./components/common/PageTemplate";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <B1ndToastContainer autoClose={1000} limit={1} />
      <BrowserRouter basename="/banner">
        <GlobalStyle />
        <PageTemplate>
          <Router />
        </PageTemplate>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
