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
      href: "/visit",
    },
    {
      label: "Cities and Towns",
      href: "/visit",
    },
    {
      label: "Mountains",
      href: "#/mountains"
    },
    {
      label: "National Parks",
      href: "#/nationalparks"
    },
    {
      label: "valleys",
      href: "#/valleys"
    },
    {
      label: "waterfalls",
      href: "#/waterfalls"
    },
    {
      label: "Ancient Forts",
      href: "#/forts"
    }
  ];


  export const explore: Explore[] = [
    {
      label: "Northean india",
      href: "/visit",
    },
    {
      label: "Southn India",
      href: "/visit",
    },
    {
     label: "Western India",
     href: "/visit"
    },
    {
     label: "Central India",
     href: "/visit"
    }
  ];

 export const ThinkstoDo = [
   
   {
    label: "Star Gadding",
    href: "#/stargaddig"
   },
   {
    label: "Adrenalin and adventure",
    href: "#/adventures"
   },
   {
    label: "Backpacking",
    href: "#/backpacking"
   },
   {
    label: "Camping abd glamping",
    href: "#/camping"
   },
   {
    label: "Film & tv",
    href: "#/film"
   },
 ] 

export const Findaccommodation = [
  {
    label:"Apartments",
    href:"/apartments"
  },
  {
    label:"Hotels",
    href:"/hotels"
  },
  {
    label:"Apartments",
    href:"/Backpackers and hostels"
  },
  {
    label:"Boutique and lodge",
    href:"/apartments"
  },
  {
    label:"HomeStays",
    href:"/HomeStays"
  },
  {
    label:"Camping and Holiday Parks",
    href:"/camping"
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
