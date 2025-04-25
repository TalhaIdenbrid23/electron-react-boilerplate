import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    // Add user message to chat
    const newMessages = [...messages, { user: input, bot: '' }];
    setMessages(newMessages);
    setInput('');

    // Call the Gemini API (or your AI API) to get a response
    const response = await fetch('YOUR_GEMINI_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here, like authorization
      },
      body: JSON.stringify({ message: input }), // Adjust the payload as needed
    });

    if (response.ok) {
      const data = await response.json();
      const botMessage = data.response; // Adjust based on your API response structure
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1].bot = botMessage; // Update the last message with the bot's response
        return updatedMessages;
      });
    } else {
      console.error('Error fetching response from API');
      // Optionally handle error response
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100">
      <h2 className="text-2xl mb-4">Chat with AI</h2>
      <div className="flex-grow overflow-y-auto p-4 bg-white rounded shadow-md">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <div className="text-left">
              <strong>User:</strong> {msg.user}
            </div>
            <div className="text-right">
              <strong>Bot:</strong> {msg.bot}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="flex-grow border rounded p-2"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
