import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import router from './routes/Router'
import './css/globals.css'
import './i18n'
import i18n from './i18n'
import { ThemeProvider } from './components/provider/theme-provider'
import { Toaster } from './components/ui/sonner'
import { queryClient } from './lib/query-client'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="neosync-theme">
          <RouterProvider router={router} />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </I18nextProvider>
  )
}

export default App
