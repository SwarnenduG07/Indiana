import { Label } from "@radix-ui/react-dropdown-menu";
import { Choose, Explore, LiveNav, Opsitons } from "./types";
import { MoveIndia } from "./components/liveandwork/navbarContent/MoveIndia";
import { chooseIndia } from "./components/liveandwork/navbarContent/chooseIndia";


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

export const livenav : LiveNav[]= [

  {
      title: "Choose",
      label: "India",
      component: chooseIndia,
      
  },
  {
    title: "Move",
    label : "to India",
    component: MoveIndia,
    
  },
  {
    title: "Live",
    label: "in India",
    component: chooseIndia,
    
  },
  {
    title: "Work",
    label: "in India",
    component: chooseIndia,
    
  },
]

export const ChooseIndia: Choose[] = [
        {
          title: "Balanced Lifistyle",
          href : "/visit"
        },
        {
          title: "Safe & secure",
          href : "/visit"
        },
        {
          title: "Family friendly",
          href : "/visit"
        },
        {
          title: "Clean and Beautiful",
          href : ""
        },
        {
          title: "A warm WellCome",
          href : ""
        },
        {
          title: "Compare India",
          href : ""
        },
        {
          title: "Regions & cities",
          href : ""
        },
        {
          title: "Low cost",
          href : ""
        },
]

export const MovetoIndia: Choose[] = [
   {
    title: "Visas For India",
    href: ""
   },
   {
    title: "Before You apply",
    href: "Before You Live"
   },
   {
    title: "When You Arrive",
    href: ""
   },
   {
    title: "Access help and Support",
    href: ""
   },
]


export const LiveIndia: Choose[] = [
  {
    title: "Tips for Setting in",
    href:""
  },
  {
    title: "Logistics for Getting started",
    href:""
  },
  {
    title: "Money & tax",
    href:""
  },
  {
    title: "Housing",
    href:""
  },
  {
    title: "HealthCare",
    href:""
  },
  {
    title: "Education and schooling",
    href:""
  },
  {
    title: "Safety",
    href:""
  },
  {
    title: "Recreation",
    href:""
  },
  {
    title: "History & government",
    href:""
  },
  {
    title: "Hindi language",
    href:""
  },
  {
    title: "Migrant settlement strategy",
    href:""
  },
]

export const WorkIndia: Choose[] = [
  {
    title: "Job Market & key industries",
    href: ""
  },
  {
    title: "Finding & Applying for Jobs",
    href: ""
  },
  {
    title: "Our IN way of working",
    href: ""
  },
  {
    title: "Support in the workplace",
    href: ""
  },
  {
    title: "Employment right",
    href: ""
  },
  {
    title: "Working Holidays",
    href: ""
  },
  {
    title: "",
    href: ""
  },
]

// TODO MOVE LIVE WORK STUDY INVEST TYPES ADDING