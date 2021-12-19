import React from 'react'

// A Component that displays the error message for five seconds
// and then clears it.


function URLComponent() {
    // Create a state variable to hold the URL
    const [url, setUrl] = React.useState('')
    // Create a state variable to hold the short URL
    const [shortUrl, setShortUrl] = React.useState('')
    // Create a state variable to hold the error message
    const [error, setError] = React.useState('')
    function ErrorMessage(error) {
        // Set the error message for five seconds
        React.useEffect(() => {
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
            <div>
                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
        )
    }

    function handleSubmit(event) {
        // Prevent the default form submission
        event.preventDefault()
        // Check if the URL is valid
        if (validateUrl(url)) {
            // If the URL is valid, send a POST request to the server
            fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "longUrl": url })
            })
                .then(res => res.json())
                .then(data => {
                    // If the server returns a short URL, set the short URL
                    // and clear the error message
                    if (data.shortUrl) {
                        setShortUrl(data.shortUrl)
                        setError(null)
                    }
                    // If the server returns an error, set the error message
                    else {
                        setError(data.error)
                    }
                })
        }
        // If the URL is not valid, set the error message
        else {
            setError('Invalid URL')
        }
    }

    function validateUrl(url) {
        // Check if the URL is valid

       
        return true
    }


    return (
        <div className='container mx-auto' >
            <form>
                <div className='flex flex-col items-center mx-auto my-6'>
                    <label className='text-xl my-4' htmlFor='url'>Enter a URL</label>
                    <input className='w-full shadow-md border-2 w-1/2' type='text' id='url' />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-4' onClick={handleSubmit} >Shorten URL</button>
                    {ErrorMessage(error)}
                </div>
            </form>
        </div>
    )
}

export default URLComponent
