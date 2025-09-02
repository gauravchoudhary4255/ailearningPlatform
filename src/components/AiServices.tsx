import { useNavigate } from "react-router-dom";

const AiServices = () => {
  const navigate = useNavigate()
  const services = [
    {
      id: 1,
      name: "React.js Mastery Course",
      description: "Learn React.js from scratch and build modern web apps.",
      status: "Active",
    },
    {
      id: 2,
      name: "Node.js Backend Bootcamp",
      description: "Master Node.js, Express, and MongoDB for scalable apps.",
      status: "Active",
    },
  ];

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-700">
          Your Activated Services
        </h2>

        {services.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[250px]">
            <p className="text-lg text-gray-500">No active services found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-lg border p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700">
                    {service.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>

                {/* Action Button */}
                <div className="mt-4 text-right">

                  <button className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                  onClick={()=>{navigate(`/aiServices/${service.id}`)}}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiServices;
