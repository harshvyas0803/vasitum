import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function PlaceholderContent() {
  return (
    <Card className="rounded-lg mr-10 mt-2 min-h-[calc(100vh-56px-0px-20px-24px-56px-48px)]">
      <CardContent className="ml-0 p-2 flex flex-col md:flex-row min-h-full">
        {/* First row of content */}
        <div className="left-container flex flex-col md:w-2/3 md:mr-2 flex-grow">
          {/* Available Positions, Jobs Open, and New Employees */}
          <div className="left border mt-2 p-2 w-full border-none flex-col">
            <div className="main flex flex-col gap-3 justify-start items-center md:flex-row">
              <div className="rounded-lg p-3 bg-[#ff5151c0] w-full md:w-1/3 h-30 text-[#000000] dark:text-white">
                <h1 className="font-medium">Available Position</h1>
                <span className="font-medium text-4xl">24</span>
                <br />
                <span className="text-[#b03b45] dark:text-red-300">Urgently needed</span>
              </div>

              <div className="rounded-lg p-3 bg-[#3784f1a6] w-full md:w-1/3 h-30 text-[#000000] dark:text-white">
                <h1 className="font-medium">Job Open</h1>
                <span className="font-medium text-4xl">10</span>
                <br />
                <span className="text-[#2b6ac4] dark:text-blue-300">4 Active Hiring</span>
              </div>

              <div className="rounded-lg p-3 bg-[#ee61cfa4] w-full md:w-1/3 h-30 text-[#000000] dark:text-white">
                <h1 className="font-normal">New Employees</h1>
                <span className="font-medium text-4xl">24</span>
                <br />
                <span className="text-[#c04d9d] dark:text-pink-300">4 Departments</span>
              </div>
            </div>
          </div>

          {/* Employees and Talent Request */}
          <div className="section-2 mt-4 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-row items-center border border-gray-300 dark:border-gray-600 rounded-md w-full md:w-1/2 p-2">
              <div className="left pl-2">
                <h1 className="font-semibold text-gray-800 dark:text-gray-200">Total Employees</h1>
                <span className="font-medium text-4xl text-gray-900 dark:text-white">216</span>
                <p className="font-extralight text-gray-600 dark:text-gray-400">120 Men</p>
                <p className="font-extralight text-gray-600 dark:text-gray-400">96 Women</p>
              </div>
              <div className="img mt-3">
                <Image
                  src="/framel.png"
                  alt="Graph illustrating total employee statistics"
                  width={115}
                  height={121}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-row items-center border border-gray-300 dark:border-gray-600 rounded-md w-full md:w-1/2 p-2">
              <div className="left pl-2">
                <h1 className="font-semibold text-gray-800 dark:text-gray-200">Talent Request</h1>
                <span className="font-medium text-4xl text-gray-900 dark:text-white">16</span>
                <p className="font-extralight text-gray-600 dark:text-gray-400">6 Men</p>
                <p className="font-extralight text-gray-600 dark:text-gray-400">10 Women</p>
              </div>
              <Image
                src="/framer.png"
                alt="Graph showing talent request statistics"
                width={115}
                height={121}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Announcements Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-4 flex-grow">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Announcement</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">Today, 13 Sep 2021</div>
            </div>

            <div className="px-6 py-4 space-y-3">
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                <div>
                  <h3 className="text-gray-800 dark:text-white font-medium">Outing schedule for every department</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">5 Minutes ago</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-300">
                  <i className="fas fa-thumbtack"></i>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                <div>
                  <h3 className="text-gray-800 dark:text-white font-medium">Meeting HR Department</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Yesterday, 12:30 PM</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-300">
                  <i className="fas fa-thumbtack"></i>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                <div>
                  <h3 className="text-gray-800 dark:text-white font-medium">IT Department needs two more talents for UX/UI Designer position</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Yesterday, 09:15 AM</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-300">
                  <i className="fas fa-thumbtack"></i>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-center py-4">
              <Link href="#" className="text-red-500 dark:text-red-400 font-semibold">See All Announcements</Link>
            </div>
          </div>
        </div>

        {/* Right Section - Recently Activity and Upcoming Schedule */}
        <div className="right border border-gray-300 dark:border-gray-600 p-4 w-full md:w-1/3 mt-4 md:mt-0 dark:bg-gray-800 dark:text-white flex flex-col flex-grow">
          <div className="w-full bg-[#1A1F57] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recently Activity</h2>
            <p className="text-sm text-gray-400 mb-2">10:40 AM, Fri 10 Sept 2021</p>
            <h3 className="text-xl font-semibold mb-2">You Posted a New Job</h3>
            <p className="text-sm text-gray-300 mb-4">
              Kindly check the requirements and terms of work and make sure everything is right.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">Today you made 12 activities</p>
              <a href="#" className="bg-[#FF6161] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                See All Activity
              </a>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-4">
            <div className="px-6 py-4">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Upcoming Schedule</h2>
              <button className="text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-1">
                Today, 13 Sep 2021
              </button>
            </div>

            {/* Priority Section */}
            <div className="mb-6 px-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Priority</h3>
              <div className="bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg p-4 mb-3 flex justify-between items-center">
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
              <div className="bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg p-4 mb-3 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Interview with candidates</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Today - 10.30 AM</p>
                </div>
                <i className="fas fa-ellipsis-h text-gray-400 dark:text-gray-300"></i>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-lg p-4 mb-3 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Short meeting with product designer from IT Department</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Today - 09.15 AM</p>
                </div>
                <i className="fas fa-ellipsis-h text-gray-400 dark:text-gray-300"></i>
              </div>
            </div>

            {/* Footer Button */}
            <div className="text-center py-4">
              <Link href="#" className="text-red-500 dark:text-red-400 text-sm font-semibold py-3 block border-t border-gray-200 dark:border-gray-600">
                Create a New Schedule
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
