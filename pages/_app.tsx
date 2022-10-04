import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component key={router.asPath} {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
