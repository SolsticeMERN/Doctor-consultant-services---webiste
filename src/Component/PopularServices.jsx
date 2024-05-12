import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);
  const axiosSecure = useAxiosSecure()

  const url = "/popularServices";
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setPopularServices(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="my-20">
      <div className="text-center text-5xl font-bold">
        <h1>Our Popular Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {popularServices.map((service, index) => (
          <PopularCard key={index} service={service}></PopularCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-5">
       <Link to='/services'>
       <div>
        <button className="btn bg-[#3498db] flex-grow text-[#ffffff]">
          Show All
        </button>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default PopularServices;
