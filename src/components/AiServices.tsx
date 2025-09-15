import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {subscriptionServices} from "../services/api/subscriptionServices"

const AiServices = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  console.log(subscriptions,"check")
const getProduct = async ()=>{
     const getSubscriptionList = await subscriptionServices.getUserSubscription();
     console.log(getSubscriptionList.data.data , "getSubscription list ") 
     if(Number(getSubscriptionList.data.statusCode) === 200){
             setSubscriptions(getSubscriptionList.data.data)
     }
     //  setSubscriptions([getSubscriptionList])
     //  console.log(getSubscriptionList , "getSubscription list")
}
  useEffect(()=> {
    getProduct()
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center p-6 bg-gray-100 ">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-700">
          Your Services
        </h2>

        {subscriptions.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[250px]">
            <p className="text-lg text-gray-500">No active services found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {subscriptions.map((service : any) => (
              <div
                key={service._id}
                className="rounded-lg border p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>

                {/* Action Button */}
                <div className="mt-4 text-right">
                  <button
                    className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                    onClick={() => {
                      navigate(`/aiServices/${service.serviceId}`);
                    }}
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
