import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Search = () => {
  return (
    <div> <div className="flex gap-5 bg-gray-100 py-2 my-2">
    <Form.Control type="text" placeholder="Search Doctor Name"  className="border border-purple-400 flex-1 ml-2 bg-gray-100 rounded-md shadow-md"/>
    <Form.Control type="text" placeholder="Speciality"  className="border border-purple-400 flex-1 ml-2 bg-gray-100 rounded-md shadow-xl"/>
    <Form.Control type="text" placeholder="Hospital Name"  className="border border-purple-400 flex-1 ml-2 bg-gray-100 rounded-md shadow-md"/>
    <Button
            variant="primary"
            className="bg-purple-800 w-1/6 text-lg border border-purple-600 hover:bg-purple-800 active:bg-purple-800 text-white font-semibold"
          >
            Search
          </Button>
  </div></div>
  )
}

export default Search