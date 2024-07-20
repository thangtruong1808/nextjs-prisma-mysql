import { getPosts, getUsers } from "@/app/lib/getUsers";
import Card from "./components/Card";
import Link from "next/link";

export default async function Home() {
  const userList = await getUsers();
  // console.log("---------- you are here ----------");
  // console.log(userList);
  return (
    <>
      <h1 className="p-5 text-center bg-sky-500 mb-5">Welcome to Next.Js</h1>
      <div className="flex items-center justify-center">
        <Link
          className="mb-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md w-1/6 text-center"
          href={"/user"}
        >
          Create User
        </Link>
      </div>

      {/* grid h-screen place-items-center */}
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {userList.map((user: any) => (
            <Card user={user} key={user.id} />
          ))}
        </div>
      </main>
    </>
  );
}
