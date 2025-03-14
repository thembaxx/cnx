export interface DataProps {
  category: string;
  image: string;
  description: string;
  date: string;
}

export const data: DataProps[] = [
  {
    category: "Plumbing",
    image:
      "https://images.unsplash.com/photo-1683099767376-87361ca41b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsdW1iaW5nJTIwaG91c2V8ZW58MHx8MHx8fDI%3D",
    description:
      "Plumbing is the system of pipes, fittings, and fixtures in a building used for the distribution of water and removal of wastewater. It includes water supply, drainage, and venting systems, as well as gas piping and heating systems. Plumbers install, repair, and maintain these systems to ensure proper functioning and safety.",
    date: new Date().toLocaleString(),
  },
  {
    category: "Electrical",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3RyaWNhbHxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Electrical housework involves the installation, maintenance, and repair of electrical systems in residential buildings. This includes wiring, lighting, electrical outlets, circuit breakers, and fuse boxes. Electricians ensure that electrical systems are safe, efficient, and up to code. They also troubleshoot and fix electrical issues, upgrade outdated systems, and install new electrical appliances or devices. It's a crucial part of modern living, as it ensures the reliable distribution of electricity throughout the home.",
    date: new Date().toLocaleString(),
  },
  {
    category: "Painting",
    image:
      "https://images.unsplash.com/photo-1627643958434-d8e524f75cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBwYWludGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "A house painter is responsible for applying paint, varnish, and other finishes to the exterior and interior surfaces of buildings and other structures. Their duties typically include surface preparation, such as cleaning, sanding, and priming; selecting and mixing paint colors; applying paint using brushes, rollers, or spray equipment; and ensuring that the finished work meets quality standards. House painters also protect non-paintable areas, such as windows and trim, and clean up after the job is completed. They play a crucial role in enhancing the aesthetic appeal and protecting the surfaces of homes.",
    date: new Date().toLocaleString(),
  },
  {
    category: "Roofing",
    image:
      "https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vZmluZ3xlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "House roofing involves the installation, repair, and maintenance of the roof structure and coverings of residential buildings. Roofers work with various materials, such as shingles, tiles, metal, and asphalt, to protect homes from the elements and enhance their appearance. Their tasks include measuring and cutting roofing materials, securing them to the roof structure, installing insulation and ventilation systems, and ensuring proper drainage with gutters and downspouts. Roofers also inspect and repair damaged or worn-out roofs to prevent leaks and structural issues.",
    date: new Date().toLocaleString(),
  },
  {
    category: "Window Installation",
    image:
      "https://images.unsplash.com/photo-1691211190204-2fc33c9955c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdpbmRvd3MlMjBpbnN0YWxsYXRpb258ZW58MHx8MHx8fDI%3D",
    description:
      "Window installation involves fitting new or replacement windows into the frames of a building. This process includes measuring the window opening to ensure a proper fit, preparing the area by removing old windows and any debris, installing the new windows with appropriate sealing to prevent air and water leaks, and securing them in place with screws or nails. The installer also ensures that the windows are level and operate smoothly. Proper window installation is essential for energy efficiency, noise reduction, and overall home comfort.",
    date: new Date().toLocaleString(),
  },
];
