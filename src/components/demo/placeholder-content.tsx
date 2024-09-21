import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function PlaceholderContent() {
  return (
    <Card className="rounded-lg mr-10 mt-2 min-h-[calc(100vh-56px-0px-20px-24px-56px-48px)] bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl transition-all duration-500">
      <CardContent className="ml-0 p-2 flex flex-col md:flex-row min-h-full bg-white dark:bg-gray-900 rounded-lg shadow-md">
        {/* First row of content */}
        <div className="left-container flex flex-col md:w-2/3 md:mr-2 flex-grow">
          {/* Available Positions, Jobs Open, and New Employees */}
          <div className="left border mt-2 p-2 w-full border-none flex-col">
            <div className="main flex flex-col gap-3 justify-start items-center md:flex-row">
              {[
                { title: "Available Position", count: 24, urgency: "Urgently needed", bgColor: "bg-red-400", textColor: "text-black" },
                { title: "Job Open", count: 10, urgency: "4 Active Hiring", bgColor: "bg-blue-400", textColor: "text-black" },
                { title: "New Employees", count: 24, urgency: "4 Departments", bgColor: "bg-pink-400", textColor: "text-black" },
              ].map((item, index) => (
                <div key={index} className={`rounded-lg p-3 ${item.bgColor} w-full md:w-1/3 h-30 ${item.textColor} dark:text-white transition-transform duration-300 transform hover:scale-105`}>
                  <h1 className="font-medium">{item.title}</h1>
                  <span className="font-medium text-4xl">{item.count}</span>
                  <br />
                  <span className="text-red-600 dark:text-red-300">{item.urgency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Employees and Talent Request */}
          <div className="section-2 mt-4 flex flex-col md:flex-row justify-between gap-4">
            {[
              { title: "Total Employees", count: 216, male: 120, female: 96, imgSrc: "/framel.png" },
              { title: "Talent Request", count: 16, male: 6, female: 10, imgSrc: "/framer.png" },
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center border border-gray-300 dark:border-gray-600 rounded-md w-full md:w-1/2 p-2 transition-transform duration-300 transform hover:scale-105">
                <div className="left pl-2">
                  <h1 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h1>
                  <span className="font-medium text-4xl text-gray-900 dark:text-white">{item.count}</span>
                  <p className="font-extralight text-gray-600 dark:text-gray-400">{item.male} Men</p>
                  <p className="font-extralight text-gray-600 dark:text-gray-400">{item.female} Women</p>
                </div>
                <div className="img mt-3">
                  <Image src={item.imgSrc} alt={`Graph illustrating ${item.title.toLowerCase()}`} width={115} height={121} className="rounded-lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Announcements Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-4 flex-grow transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Announcement</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">Today, 13 Sep 2021</div>
            </div>

            <div className="px-6 py-4 space-y-3">
              {[
                { title: "Outing schedule for every department", time: "5 Minutes ago" },
                { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
                { title: "IT Department needs two more talents for UX/UI Designer position", time: "Yesterday, 09:15 AM" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm transition-transform duration-300 transform hover:scale-105">
                  <div>
                    <h3 className="text-gray-800 dark:text-white font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-300">
                    <i className="fas fa-thumbtack"></i>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-center py-4">
              <Link href="#" className="text-red-500 dark:text-red-400 font-semibold">See All Announcements</Link>
            </div>
          </div>
        </div>

        {/* Right Section - Recently Activity and Upcoming Schedule */}
        <div className="right border border-gray-300 dark:border-gray-600 p-4 w-full md:w-1/3 mt-4 md:mt-0 dark:bg-gray-800 dark:text-white flex flex-col flex-grow transition-transform duration-300 transform hover:scale-105">
          <div className="w-full bg-[#1A1F57] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recently Activity</h2>
            <p className="text-sm text-gray-400 mb-2">10:40 AM, Fri 10 Sept 2021</p>
            <h3 className="text-xl font-semibold mb-2">You Posted a New Job</h3>
            <p className="text-sm text-gray-300 mb-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">Today you made 12 activities</p>
              <a href="#" className="bg-[#FF6161] text-white px-4 py-2 rounded-lg text-sm font-semibold">See All Activity</a>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-4 transition-transform duration-300 transform hover:scale-105">
            <div className="px-6 py-4">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Upcoming Schedule</h2>
              <button className="text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">Today, 13 Sep 2021</button>
            </div>

            {/* Priority Section */}
            <div className="mb-6 px-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Priority</h3>
              <div className="bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg p-4 mb-3 flex justify-between items-center transition-transform duration-300 transform hover:scale-105">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Review candidate applications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Today - 11.30 AM</p>
                </div>
                <i className="fas fa-ellipsis-h text-gray-400 dark:text-gray-300"></i>
              </div>
            </div>

            {/* Other Section */}
            <div className="mb-6 px-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Other</h3>
              {[
                { title: "Interview with candidates", time: "Today - 10.30 AM" },
                { title: "Short meeting with product designer from IT Department", time: "Today - 09.15 AM" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg p-4 mb-3 flex justify-between items-center transition-transform duration-300 transform hover:scale-105">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
                  </div>
                  <i className="fas fa-ellipsis-h text-gray-400 dark:text-gray-300"></i>
                </div>
              ))}
            </div>

            {/* Footer Button */}
            <div className="text-center py-4">
              <Link href="#" className="text-red-500 dark:text-red-400 text-sm font-semibold py-3 block border-t border-gray-200 dark:border-gray-600">Create a New Schedule</Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
