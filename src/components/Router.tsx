import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import CyberAwarenessPage from '@/components/pages/CyberAwarenessPage';
import CyberAwarenessDetailPage from '@/components/pages/CyberAwarenessDetailPage';
import IPNetworkSafetyPage from '@/components/pages/IPNetworkSafetyPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "cyber-awareness",
        element: <CyberAwarenessPage />,
        routeMetadata: {
          pageIdentifier: 'cyber-awareness',
        },
      },
      {
        path: "cyber-awareness/:id",
        element: <CyberAwarenessDetailPage />,
        routeMetadata: {
          pageIdentifier: 'cyber-awareness-detail',
        },
      },
      {
        path: "ip-network-safety",
        element: <IPNetworkSafetyPage />,
        routeMetadata: {
          pageIdentifier: 'ip-network-safety',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
