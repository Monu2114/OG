import Image from "next/image";
import Comment from "./components/comment";
import PublicTalk from "./components/PublicTalk";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/japan.jpg')] bg-cover bg-center bg-no-repeat opacity-25"></div>

      {/* Overlay content */}
      <div className="relative flex flex-col">
        <div className="flex">
          <Image
            src="/samurai.jpg"
            alt="Samurai Poster"
            width={200}
            height={200}
            className="h-48 rounded-xl object-contain"
          />
          <Image
            src="/og.jpg"
            alt="Samurai Poster"
            width={200}
            height={200}
            className="h-48 rounded-xl object-contain"
          />
          <Image
            src="/OG-15.webp"
            alt="Samurai Poster"
            width={400}
            height={400}
            className="h-48 rounded-xl object-contain"
          />
          <Image
            src="/pspk.jpg"
            alt="Samurai Poster"
            width={200}
            height={200}
            className="h-48 rounded-xl object-contain"
          />
          <Image
            src="/fire.jpg"
            alt="Samurai Poster"
            width={200}
            height={200}
            className="h-48 rounded-xl object-contain"
          />
        </div>

        <PublicTalk />
      </div>
    </div>
  );
}
