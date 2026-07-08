import { Suspense, lazy } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

import data from "@/app/dashboard/data.json"

// Lazy-loaded: each pulls in a heavy charting/table library, split into its own chunk.
const ChartAreaInteractive = lazy(() =>
  import("@/components/chart-area-interactive").then((m) => ({
    default: m.ChartAreaInteractive,
  }))
)
const DataTable = lazy(() =>
  import("@/components/data-table").then((m) => ({ default: m.DataTable }))
)

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="claudewatch-ui-theme">
      <TooltipProvider>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <SidebarInset>
            <SiteHeader />
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCards />
                  <div className="px-4 lg:px-6">
                    <Suspense fallback={<Skeleton className="h-[250px] w-full" />}>
                      <ChartAreaInteractive />
                    </Suspense>
                  </div>
                  <Suspense fallback={<Skeleton className="mx-4 h-64 lg:mx-6" />}>
                    <DataTable data={data} />
                  </Suspense>
                </div>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
