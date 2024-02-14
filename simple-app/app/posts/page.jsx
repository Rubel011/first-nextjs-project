"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PostHome = () => {
  const query = useSearchParams();
  const router=useRouter()
  useEffect(() => {console.log("this is use effect");});
  console.log(query.get("name"));
  const goBack = () => {
    router.back(); 
  };
  return (
    <>
      <div>
        This is the PostHome Home page. Here you will find every details of
        posts
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goBack}>Redirect to previous page</button>
    </>
  );
};

export default PostHome;
