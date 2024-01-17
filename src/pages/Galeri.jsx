import { useEffect, useState } from "react";

// Example Adiwiyata-related images
const adiwiyataImages = [
  {
    id: 1,
    name: "Hutan Hujan Amazon",
    src: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hutan Hujan Amazon",
  },
  {
    id: 2,
    name: "Danau Louise Kanada",
    src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Danau Louise Kanada",
  },
  {
    id: 3,
    name: "Hutan Hujan Amazon",
    src: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Hutan Hujan Amazon",
  },
  {
    id: 4,
    name: "Nusa Penida Bali",
    src: "https://plus.unsplash.com/premium_photo-1668883188917-761f35942220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb25lc2lhfGVufDB8fDB8fHww",
    alt: "Nusa Penida Bali",
  },
  {
    id: 5,
    name: "Gunung Bromo",
    src: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Gunung Bromo",
  },
];

export default function AdiwiyataGallery() {
  const [adiwiyataData, setAdiwiyataData] = useState([]);

  useEffect(() => {
    // You can fetch Adiwiyata-related data here from an API or use the statically defined data
    // For simplicity, we'll use the static data
    setAdiwiyataData(adiwiyataImages);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-green-700">
          Galeri Adiwiyata
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {adiwiyataData.map((image) => (
            <div key={image.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-green-700">{image.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
