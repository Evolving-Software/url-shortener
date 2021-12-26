import React, { useState, useEffect, useCallback, useMemo } from 'react'
// A Component that displays the error message for five seconds
// and then clears it.

function URLComponent() {
  // Create a state variable to hold the URL
  const [url, setUrl] = useState('')
  // Create a state variable to hold the error message
  const [error, setError] = useState('')
  const [data, setData] = useState('')
  function ErrorMessage(error) {
    // Set the error message for five seconds
    useEffect(() => {
      if (error) {
        // Clear the error after 5 seconds
        setTimeout(() => {
          // Clear the error
          setError(null)
        }, 5000)
      }
    })
    // Display the error message
    return (
      <div>{error && <p className="text-red-500 text-center">{error}</p>}</div>
    )
  }

   const handleSubmit = useCallback(async (event) => {
    // Prevent the default form submission
    event.preventDefault()
    // Check if the URL is valid

    // If the URL is valid, send a POST request to the server
    const res = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl: url }),
    })

    if (!res.ok) {
      res.json({
        message: 'Error, failed to post data to API',
      })
    } else {
      const data = await res.json()
      setData(data)
      return
    }
   }, [url])


  const DisplayData = ({data}) => {
    // Render the data from the API when the component mounts
   
    return (
      <div>
        <div className="text-center">
          <p className="text-xl">
            Branded URL:
            <a
              className="text-blue-500 hover:text-blue-700 hover:inset-2"
              href={data.shortUrl}
            >
              {data.shortUrl}
            </a>{' '}
          </p>
          <p className="text-gray-500">{data.longUrl}</p>
          <p className="text-gray-500">{data.urlCode}</p>
          <p className="text-gray-500">{data.date}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mx-auto my-6">
          <label className="text-xl my-4" htmlFor="url">
            Enter a URL
          </label>
          <input
            className="w-full shadow-md border-2 w-1/2"
            type="text"
            id="url"
            onChange={(event) => setUrl(event.target.value)}
            value={url}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4"
            type="submit"
            value="Submit"
          >
            Shorten URL
          </button>
          {ErrorMessage(error)}
        </div>
      </form>
       {data && <DisplayData data={data} />}
    </div>
  )
}

export default URLComponent
