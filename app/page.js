import Image from "next/image";
import data from "../data.json";

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
      />
    </svg>
  );
}
function VerifiedBadgeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
    >
      <path
        fill="#86e5ff"
        d="m18.49 9.88l.08-.85l.18-1.95l-1.9-.43l-.84-.19l-.44-.74l-.99-1.68l-1.79.76l-.79.34l-.79-.34l-1.79-.77l-.99 1.68l-.44.74l-.84.19l-1.9.43l.18 1.94l.08.85l-.56.65l-1.29 1.48l1.29 1.47l.56.65l-.08.85l-.18 1.96l1.9.43l.84.19l.44.74l.99 1.67l1.78-.77l.8-.33l.79.34l1.78.77l.99-1.68l.44-.74l.84-.19l1.9-.43l-.18-1.95l-.08-.85l.56-.65L20.33 12l-1.29-1.47l-.55-.65zm-8.4 6.84l-3.8-3.81l1.48-1.48l2.32 2.33l5.85-5.87l1.48 1.48l-7.33 7.35z"
        opacity=".3"
      />
      <path
        fill="#86e5ff"
        d="M23 11.99L20.56 9.2l.34-3.69l-3.61-.82L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5l.34 3.7L1 11.99l2.44 2.79l-.34 3.7l3.61.82l1.89 3.2l3.4-1.47l3.4 1.46l1.89-3.19l3.61-.82l-.34-3.69l2.44-2.8zm-3.95 1.48l-.56.65l.08.85l.18 1.95l-1.9.43l-.84.19l-.44.74l-.99 1.68l-1.78-.77l-.8-.34l-.79.34l-1.78.77l-.99-1.67l-.44-.74l-.84-.19l-1.9-.43l.18-1.96l.08-.85l-.56-.65L3.67 12l1.29-1.48l.56-.65l-.09-.86l-.18-1.94l1.9-.43l.84-.19l.44-.74l.99-1.68l1.78.77l.8.34l.79-.34l1.78-.77l.99 1.68l.44.74l.84.19l1.9.43l-.18 1.95l-.08.85l.56.65l1.29 1.47l-1.28 1.48z"
      />
      <path
        fill="#86e5ff"
        d="m10.09 13.75l-2.32-2.33l-1.48 1.49l3.8 3.81l7.34-7.36l-1.48-1.49z"
      />
    </svg>
  );
}
function LinkCard({ href, title, image }) {
  return (
    <a
      href={href}
      className="flex items-center w-full p-1 rounded-md 
      border
      border-dashed
      border-color: from-cyan-500 to-blue-500;
      hover:border-gray-700
    hover:scale-105  transition-all  mb-3 text-gray-800   max-w-2xl"
    >
      <div className="flex  w-full text-center">
        {image && (
          <Image
            className="rounded-sm"
            alt={title}
            src={image}
            width={30}
            height={30}
          />
        )}

        <h2
          className="flex justify-center font-semibold w-full text-center text-gray-700
        hover:text-gray-900 "
        >
          {title}
        </h2>
      </div>
    </a>
  );
}
export default function Home() {
  return (
    <div className="flex mx-auto flex-col items-center px-8 w-full justify-center mt-16">
      
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <div className="flex items-center mt-4 gap-1 mb-1 justify-center text-white">
        <h1 className="font-semibold text-lg">@{data.name}</h1>
        <VerifiedBadgeIcon />
      </div>

      <p className="mb-8 text-gray-50 text-md">
        👋 Hi! Welcome to my custom{" "}
        <span className="text-green-300">Treelink</span>🍃.
      </p>

      {data.links.map((item) => (
        <LinkCard key={item.href} {...item} />
      ))}
      
      {/* <div class="relative w-full -z-10 ">
        <div class="absolute -top-8 right-7 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div class="absolute -bottom-20 -right-50 w-72 h-72 bg-grey-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
       <div class="absolute -bottom-8 left-30 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}
      <iframe
        className=" mt-5 max-w-2xl"
        src="https://open.spotify.com/embed/track/1eW8tAhOhiP9H9bHEAJTgG?utm_source=generator"
        width="100%"
        height="210"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <div className="flex items-center gap-4 mt-1 mb-5 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10  bg-gray-700 hover:text-white
            hover:rounded-xl hover:drop-shadow-lg rounded-3xl duration-300 ease-linear  transition-all "
          >
            {social.title.includes("Facebook") ? (
              <FacebookIcon />
            ) : social.title.includes("Github") ? (
              <GithubIcon />
            ) : social.title.includes("LinkedIn") ? (
              <LinkedInIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
