import { Label } from "@radix-ui/react-dropdown-menu";

 export interface Opsitons {
  label: string;
  href: string;
}

export interface Explore {
  label: string;
  href: string;
}

export const products = [
    
    {
        title: "INDIANA",
        link: "/visitPRO",
        thumbnail:
          "/india.png",
    },
    {
        title: "Live And Work",
        link: "/liveandwork",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Visit",
        link: "/visit",
        thumbnail:
          "/india.png",
    },
    {
        title: "Study",
        link: "/study",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Medical >",
        link: "/medical",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Study",
        link: "/study",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Medical >",
        link: "/medical",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Study",
        link: "/study",
        thumbnail: 
            "/swastika.svg"
    },
    
];


export const opsitons: Opsitons[] = [
    {
      label: "Beaches",
      href: "/visit/placetovisit/beaches",
    },
    {
      label: "Cities and Towns",
      href: "/visit/placetovisit/cityandtowns",
    },
    {
      label: "Mountains",
      href: "/visit/placetovisit/mountains"
    },
    {
      label: "National Parks",
      href: "/visit/placetovisit/nationalparks"
    },
    {
      label: "valleys",
      href: "/visit/placetovisit/vallyes"
    },
    {
      label: "waterfalls",
      href: "/visit/placetovisit/waterfalls"
    },
    {
      label: "Ancient Forts",
      href: "/visit/placetovisit/Ancientforts"
    }
  ];


  export const explore: Explore[] = [
    {
      label: "Northern India",
      href: "/visit/placetovisit/northan",
    },
    {
      label: "Southern India",
      href: "/visit/placetovisit/southern",
    },
    {
     label: "Western India",
     href: "/visit/placetovisit/western"
    },
    {
     label: "Eastern India",
     href: "/visit/placetovisit/eastern"
    },
    {
     label: "Central India",
     href: "/visit/placetovisit/central"
    }
  ];

 export const ThinkstoDo = [
   
   {
    label: "Star Gadding",
    href: "/visit/thingstodo/stargadding"
   },
   {
    label: "Adrenalin and adventure",
    href: "/visit/thingstodo/adventures"
   },
   {
    label: "Backpacking",
    href: "/visit/thingstodo/backpacking"
   },
   {
    label: "Camping and glamping",
    href: "/visit/thingstodo/camping"
   },
   {
    label: "Film & tv",
    href: "/visit/thingstodo/films"
   },
 ] 

export const Findaccommodation = [
  {
    label:"Apartments",
    href:"/visit/findaccommodation/apartments"
  },
  {
    label:"Hotels",
    href:"/visit/findaccommodation/hotels"
  },
  {
    label:"BackPacker",
    href:"/visit/findaccommodation/backpackers"
  },
  {
    label:"Boutique and lodge",
    href:"/visit/findaccommodation/butiques"
  },
  {
    label:"HomeStays",
    href:"/visit/findaccommodation/homestays"
  },
] 
export const Sessions = [
  {
    label: "Summer",
    href: "/visit/plantrip/summer",
    month :"May to July"
    
   },
   {
    label: "Winter",
    href: "/visit/plantrip/winter",
    month:"December - February"
   },
   {
    label: "Spring",
    href: "/visit/plantrip/spring",
    month: "March - April"
   },
   {
    label: "Autumn",
    href: "/visit/plantrip/autumn",
    month: "September - November"
   },
]

export const PlaaTrip = [
   {
     label: "Getting Around",
     href: "/Gettingaround"
   },
   {
     label: "Suggested itineraries",
     href: "/suggested"
   },
   {
     label: "travel Responsibly",
     href: "/responsibly"
   },
   {
     label: "Visas and entry Requirements",
     href: "/visarequirements"
   },
   {
     label: "working holidays",
     href: "/workingholidays"
   },
]
