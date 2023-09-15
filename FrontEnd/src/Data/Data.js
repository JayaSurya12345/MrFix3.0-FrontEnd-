import {
    UilUserCircle,
    UilDashboard,
    UilFeedback,
    UilHistory 
}  from "@iconscout/react-unicons";

export const SidebarData=[
    {
        icon: UilDashboard,
        heading: "Dashboard",
        path:"/",
    },
    {
        icon: UilUserCircle,
        heading: "Profile",
        path:"/profile",
    },
    
    {
        icon: UilHistory ,
        heading: "History",
        path:"/history",
    },

    {
       icon: UilFeedback ,
       heading: 'Feedback'   ,
       path:"/feedback",
    }
];