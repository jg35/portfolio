import Image from "next/image";
import profilePic from "./me.png";
import AnchorLink from "@/components/AnchorLink";

export default function Home() {
  const navItems = [
    { id: 1, title: "Check out my projects", href: "/projects" },
    { id: 2, title: "See where I've worked", href: "/work" },
    { id: 3, title: "Steal my ideas", href: "/ideas" },
    { id: 4, title: "Read my blog", href: "/blog" },
    { id: 5, title: "Watch my travel vidoes!?", href: "/videos" },
  ];
  const emojis = ["😊", "😠"];
  return (
    <>
      {/* intro */}
      <div className="p-4 mt-6">
        {/* picture & headline */}
        <div className="flex items-center pb-8">
          <div className="min-w-32 w-32 pr-4">
            <Image
              src={profilePic}
              width={330}
              height={326}
              alt="Picture of the author"
            />
          </div>
          <h1>
            Hey!! {emojis[0]} I’m{" "}
            <mark className="bg-lime rounded text-blue font-medium">James</mark>
            , a full-stack dev based in London.
          </h1>
        </div>
        {/* welcome */}
        <p className="mb-3">
          Welcome to my{" "}
          <mark className="bg-lime rounded text-blue font-medium">
            new home
          </mark>{" "}
          on the web! ✨
        </p>
        <p>Here you can...</p>
      </div>

      {/* nav items... */}
      <div className="flex flex-col mt-3">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="inline mb-6 bg-gradient-to-r from-limeLight to-lime py-2 px-4 max-w-fit"
          >
            <a
              href={item.href}
              className="text-2xl font-medium text-blue no-underline"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      {/* you can also... */}
      <div className="px-4 py-8 mb-6">
        <p>
          You can also{" "}
          <AnchorLink href="/download" target="_blank">
            download my cv
          </AnchorLink>{" "}
          or read about{" "}
          <AnchorLink href="/blog/how-i-got-into-coding">
            how I got into coding
          </AnchorLink>
          .
        </p>
      </div>

      {/* newsletter */}
      <div className="bg-gradient-to-r from-limeLight to-lime py-3 px-4 text-blue">
        <p className="mb-3">
          If none of that appeals to you, why not sign up to my newsletter?&#42;
        </p>
        <input
          type="text"
          className="p-4 w-full"
          placeholder="enter your email"
        />
        <small className="text-xs">
          * It doesn’t actually exist yet, but stay tuned!{" "}
        </small>
      </div>
      {/* CTA */}
      <div className="px-4 py-8">
        <p className="text-sm text-center">
          Oh, you’re still here do you{" "}
          <mark className="bg-lime rounded text-blue font-medium">
            <AnchorLink href="/surprise">like surprises</AnchorLink>
          </mark>
          ?
        </p>
      </div>
    </>
  );
}
