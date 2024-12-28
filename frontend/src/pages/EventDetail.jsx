import EventItem from '../components/EventItem'
import { redirect, useRouteLoaderData } from 'react-router-dom'

export default function EventDetail() {
  // const { eventId } = useParams()
  const data = useRouteLoaderData('event-detail')

  return (
    <EventItem event={data.event} />
  )
}

export async function loader({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`)

  if (!response.ok) {
    throw new Response({ message: 'Error fetching event data' }, { status: 500 })
  }

  return response
}

export async function action({ params, request }) {
  const eventId = params.eventId
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,

  })

  if (!response.ok) {
    throw new Response({ message: 'Error deleting data.' }, { status: 500 })
  }

  return redirect('/events')
}