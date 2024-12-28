import { useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList'

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false)
  // const [fetchedEvents, setFetchedEvents] = useState()
  // const [error, setError] = useState()

  // const loaderData = useLoaderData()

  const data = useLoaderData()
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  return <EventsList events={data.events} />

}

export default EventsPage

//useFetch() ? section not included, too much overwriting and covering of prior concepts
export async function loader() {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // setError('Fetching events failed.')

    // return { isError: true, message: 'Error fetching events data.' }
    throw new Response(JSON.stringify({ message: 'Error fetching events data' }), { status: 500 })

    // YET ANOTHER ROUTER HANDLER (6 ONLY, NOT HERE with 7)
    // return json()
  } else {
    // const data = await response.json()
    // setFetchedEvents(resData.events)
    // return data.events
    // const res = new Response('any data', {status: 201})
    // return res
    //ROUTER LOADER WILL AUTOMATICALLY AWAIT RESOLVE OF RESPONSE PROMISE...?
    return response
  }
}
