import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function PlaceholderContent() {
  return (
    <Card className="rounded-lg border-none outline-none mt-2 min-h-[calc(100vh-56px-0px-20px-24px-56px-48px)]">
      <CardContent className="ml-0 p-2 flex flex-col outline-none border-none md:flex-row">
        {/* First row of content */}
        <div className="left-container w-full md:w-2/3 flex flex-col md:mr-2">
          <div className="left border mt-2 p-2 w-full border-none flex-col">
            <div className="main flex gap-3 justify-start items-center">
              {/* Available Position */}
              <div className="rounded-lg p-3 bg-[#ff5151c0] w-1/3 h-30 text-[#000000]">
                <h1 className="font-medium">Available Position</h1>
                <span className="font-medium text-4xl">24</span><br />
                <span className="text-[#b03b45]">Urgently needed</span> {/* Darker red */}
              </div>

              {/* Job Open */}
              <div className="rounded-lg p-3 bg-[#3784f1a6] w-1/3 h-30 text-[#000000]">
                <h1 className="font-medium">Job Open</h1>
                <span className="font-medium text-4xl">10</span><br />
                <span className="text-[#2b6ac4]">4 Active Hiring</span> {/* Darker blue */}
              </div>

              {/* New Employees */}
              <div className="rounded-lg p-3 bg-[#ee61cfa4] w-1/3 h-30 text-[#000000]">
                <h1 className="font-normal">New Employees</h1>
                <span className="font-medium text-4xl">24</span><br />
                <span className="text-[#c04d9d]">4 Departments</span> {/* Darker pink */}
              </div>
            </div>
          </div>

        
          <div className="harsh mt-4">
       <div className="left">




       </div>
          <div className="right">



          </div>
          </div>
        </div>

        {/* Right section */}
        <div className="right border border-gray-300 p-4 w-full md:w-1/3 mt-4">
          Right Section (Add your content here)
        </div>
      </CardContent>
    </Card>
  );
}
