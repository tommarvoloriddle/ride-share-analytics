import Image from "next/image";
import Header  from "./ui/header";
import Footer from "./ui/footer";
import LoginForm from "./ui/login-form";
import { url } from "inspector";
export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-b from-white via-gray-300 to-black bg-cover bg-center" style={{ backgroundImage: 'url("https://c1.wallpaperflare.com/preview/228/290/524/new-york-red-yellow-usa.jpg")' }}>
  <div className="min-h-screen flex flex-col items-center justify-centre py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-14">
        <LoginForm />
      </div>
  </div>
</div>

  );
}
