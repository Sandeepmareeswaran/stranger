import { useState } from 'react';

function Home() {
  // State to hold the user's prompt
  const [prompt, setPrompt] = useState('');
  // State to track if we are currently generating a video
  const [isLoading, setIsLoading] = useState(false);
  // State to hold the URL of the generated video
  const [videoUrl, setVideoUrl] = useState('');

  const handleGenerateVideo = () => {
    if (!prompt || isLoading) {
      if (!prompt) alert("Please enter a prompt!");
      return;
    }

    setIsLoading(true);
    setVideoUrl('');

    // Simulate the API call to the backend
    console.log(`Generating video for prompt: "${prompt}"`);
    setTimeout(() => {
      const generatedUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
      setVideoUrl(generatedUrl);
      setIsLoading(false);
    }, 5000); // Simulate a 5-second generation time
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Video Generator</h1>
        <p className="text-gray-600 mb-6">Enter a prompt and we'll generate a 10-second video for you.</p>

        {/* Input and Button Area */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., a robot dancing in the rain"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerateVideo}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        {/* Video Display Area */}
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mt-6">
          {isLoading && (
            <p className="text-gray-500">Creating your masterpiece, please wait...</p>
          )}

          {!isLoading && videoUrl && (
            <video
              src={videoUrl}
              controls
              className="w-full h-full object-contain rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          )}

          {!isLoading && !videoUrl && (
             <p className="text-gray-500">Your generated video will appear here</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Home;