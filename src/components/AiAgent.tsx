import React, { useState, useRef, useEffect } from 'react';
import { Bot, User } from 'lucide-react';
import { useParams } from 'react-router-dom';
import aiAgentServices from '../services/api/aiAgentApi';
export default function GeminiChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
const params = useParams();
const {_id} = params;
const serviceId = _id;
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const data = {
        serviceId : serviceId,
        prompt : input
      }
      console.log(data ,"whats that")
      const res = await aiAgentServices.aiAgentApi(data)
      console.log(res.data.data , "wjhat is data")
      const aiMessage = { role: 'ai', content: res.data.data }
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: `⚠️ ${err.message || 'Something went wrong'}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[1120px] w-full mx-auto my-6 p-4 flex flex-col bg-white border border-blue-200 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-blue-700 text-center">🤖 AiLearning Agent {}</h2>

      <div className="h-80 overflow-y-auto rounded-lg border border-blue-100 p-3 bg-blue-50 space-y-3">
        {messages.length === 0 && (
          <p className="text-blue-300 text-center">Start the conversation...</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'ai' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
            )}
            <div
              className={`px-3 py-2 rounded-xl max-w-[70%] whitespace-pre-wrap text-sm shadow-sm ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-blue-900 border border-blue-200 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
                <User size={18} />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-2 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Bot size={18} />
            </div>
            <div className="px-3 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl rounded-bl-none shadow-sm text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
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

