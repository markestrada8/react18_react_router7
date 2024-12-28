import React from 'react'
import EventForm from '../components/EventForm'
import { redirect } from 'react-router-dom'

export default function NewEvent() {
  return <EventForm method={'post'} />
}

