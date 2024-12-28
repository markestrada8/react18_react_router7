import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Events, { loader as eventsLoader } from './pages/Events'
import EventDetail, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail'
import NewEvent from './pages/NewEvent'
import EditEvent from './pages/EditEvent'
import RootLayout from './pages/RootLayout'
import EventsRootLayout from './pages/EventsRoot'
import Error from './pages/Error'
import { action as manipulateEventAction } from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter'
// Challenge / Exercise

// TODO 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// TODO 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// TODO 3. Add a root layout that adds the <MainNavigation> component above all page components
// TODO 4. Add properly working links to the MainNavigation
// TODO 5. Ensure that the links in MainNavigation receive an "active" class when active
// TODO 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// TODO 7. Output the ID of the selected event on the EventDetailPage
// TODO BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // RELATIVE PATHS
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            path: '',
            element: <Events />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction
              },
              {
                path: 'edit',
                element: <EditEvent />,
                action: manipulateEventAction
              }
            ]
          },

          {
            path: 'new',
            element: <NewEvent />,
            action: manipulateEventAction
          }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      }
      // ABSOLUTE PATHS
      // {
      //   path: '/events',
      //   element: <Events />,
      // },
      // {
      //   path: '/events/:eventId',
      //   element: <EventDetail />
      // },
      // {
      //   path: '/events/new',
      //   element: <NewEvent />
      // },
      // {
      //   path: '/events/:eventId/edit',
      //   element: <EditEvent />
      // },


    ]
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
