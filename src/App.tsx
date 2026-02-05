import { type FC } from 'react'
import { RouterProvider } from 'react-router'
import { appRouter } from '@/router/app.router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { CheckAuthProvider } from './CheckAuthProvider'

const queryClient = new QueryClient()

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        richColors
        position="bottom-center"
        toastOptions={{
          className:
            "bg-zinc-900 text-white border border-zinc-700 shadow-xl",
        }}
      />
      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
