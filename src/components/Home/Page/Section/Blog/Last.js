import React from "react";
import Img from "../../../../Assests/3d-business-partnership-illustration-png.webp";

function Page3() {
  return (
    <section className=" container mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About
      </h2>
      <div className="flex items-center flex-wrap mb-4 bg-gradient-to-l from-blue-100 via-blue-300 to-white">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">
            Exercise Metric
          </h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch is able to capture you vitals
            while you exercise. You can create different category of exercises
            and can track your vitals on the go.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Img} alt="Monitoring" />
        </div>
      </div>

      <div className="flex items-center flex-wrap bg-gradient-to-r from-blue-100 via-blue-300 to-white">
        <div className="w-full md:w-1/2">
          <img src={Img} alt="Reporting" />
        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p className="text-gray-600 mb-8">
            Our Smart Health Monitoring Wristwatch can generate a comprehensive
            report on your vitals depending on your settings either daily,
            weekly, monthly, quarterly or yearly.
          </p>
        </div>
      </div>
      {/* 
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Img} alt="Syncing" />
        </div>
      </div> */}
    </section>
  );
}

export default Page3;
