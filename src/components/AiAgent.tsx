import React, { useState } from 'react';

export default function GeminiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSend(e : any) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();

      const aiMessage = { role: 'ai', content: data.text ?? data.result ?? JSON.stringify(data) };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: 'ai', content: `⚠️ ${err.message || 'Something went wrong'}` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md w-full mx-auto my-6 p-4 flex flex-col bg-white border border-blue-200 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-blue-700 text-center">AiLearning Agent</h2>

      <div className="h-80 overflow-y-auto rounded-lg border border-blue-100 p-3 bg-blue-50 space-y-3">
        {messages.length === 0 && (
          <p className="text-blue-300 text-center">Start the conversation...</p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-3 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap text-sm shadow-sm ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-blue-900 border border-blue-200 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl rounded-bl-none animate-pulse shadow-sm text-sm">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-blue-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 disabled:opacity-60"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}
