import Profile from "./components/profile/profile";

export default function Home() {
  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="py-8 text-center text-2xl font-black italic text-white">
            About
          </h1>
          <Profile />
        </div>
        <div>
          <h1 className="py-8 text-center text-2xl font-black italic text-white">
            Projects
          </h1>
        </div>
      </div>
    </>
  );
}
