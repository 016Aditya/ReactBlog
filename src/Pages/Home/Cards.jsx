import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const Cards = ({ data }) => {
  return (
    <Link to={`/blog/${data.id}`}>
      <div className="shadow-md p-5 lg:w-96 md:w-72 sm:w-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl bg-gradient-to-br from-white via-gray-100 to-gray-200 my-4 border border-gray-200">
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle className="font-extrabold text-xl text-gray-800 hover:text-red-600 transition-colors duration-300 line-clamp-2">
              {data.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm line-clamp-4">
              {(data.body).substring(0, 250) + "..."}
            </p>
          </CardContent>
          <CardFooter className="flex items-center text-gray-600 justify-between mt-2">
            <div className="flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              <span className="text-sm font-medium">{data.views} views</span>
            </div>
            <span className="text-xs text-gray-400">Read More</span>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
};

export default Cards;
