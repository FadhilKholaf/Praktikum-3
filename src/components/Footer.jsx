import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Credit",
    items: [
      { name: "Tailwind UI", href: "https://tailwindui.com/" },
      { name: "Material Tailwind", href: "https://www.material-tailwind.com/" },
      { name: "Chat GPT", href: "https://chat.openai.com/" },
    ],
  },
  {
    title: "Project",
    items: [
      { name: "Github", href: "https://github.com/FadhilKholaf" },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/muhammad-fadhil-kholaf-7b1a7a270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      { name: "Personal Website", href: "https://fadhilkholaf.my.id" },
    ],
  },
  {
    title: "Social",
    items: [
      { name: "Instagram", href: "https://www.instagram.com/tlg69.fadhil" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full bg-green-500 text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Fadhil Adiwiyata
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium text-white"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.name}>
                    <Typography
                      as="a"
                      href={link.href}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 text-white opacity-80"
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between text-white">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Muhammad Fadhil Kholaf</a>.
            All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Social icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
