import fetch from 'node-fetch'; // Assume we're using node-fetch or similar library for HTTP requests.

export async function exampleActivity(name: string): Promise<string> {
  // Simulate calling an external service by making an HTTP request
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // External API
    if (!response.ok) {
      throw new Error(`Failed to fetch data from external service: ${response.statusText}`);
    }
    const data = await response.json(); // Parse the JSON response
    
    // Simulating some processing time after receiving the response
    await new Promise(resolve => setTimeout(resolve, 5000)); // Sleep for 5 seconds

    // Process and return the data along with the name
    return `Hello, ${name}! Here is your external data: ${JSON.stringify(data)}`;
  } catch (error) {
    throw new Error(`Error in exampleActivity: ${error.message}`);
  }
}
