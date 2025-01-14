import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Eye } from "lucide-react"

const Cards = ({ data }) => { 
  return (
    <>
      <Link to={`/blog/${data.id}`}>
        <div className="shadow-xl p-5 lg:w-96 md:w-56 sm:w-36 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg bg-gradient-to-r from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 my-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-xl text-red-400 hover:text-red-600 transition-colors duration-300">{data.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{(data.body).substring(0,250)+ "..."}</p>
            </CardContent>
            <CardFooter className="flex items-center text-gray-600">
              <Eye className="mr-2" />
              <span>{data.views} views</span>
            </CardFooter>
          </Card>
        </div>
      </Link>
    </>
  );
};

// hey this is A test


export default Cards
