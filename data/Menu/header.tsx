import { Menu } from "@/types/headerMenu";

const MenuHeaderData: Menu[] = [
    {
        id: 1,
        title: "Home",
        class: "",
        path: "/",
        newTab: false,
    },
    {
        id: 2,
        title: "About",
        class: "",
        path: "/about",
        newTab: false,
    },
    {
        id: 3,
        title: "Services",
        class: "",
        newTab: false,
        submenu: [
            { 
                id: 31,
				title: "Design",
				class: "sub-label",
                childmenu: [
                    {
                        id: 311,
                        title: "Branding ",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 312,
                        title: "Web Design",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 313,
                        title: "UI / UX Design",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 314,
                        title: "Ad Design",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 315,
                        title: "App Design",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    }
                ]
            },
            { 
                id: 32,
				title: "Development",
				class: "sub-label",
                childmenu: [
                    {
                        id: 321,
                        title: "Wordpress Development",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 322,
                        title: "eCommerce Development",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 323,
                        title: "Custom Programiming",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 324,
                        title: "React / Nextjs",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    }
                ]
            },
            { 
                id: 33,
				title: "Marketing",
				class: "sub-label",
                childmenu: [
                    {
                        id: 331,
                        title: "Search Engine Optimization",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 332,
                        title: "Search Engine Marketing",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 333,
                        title: "Conversion Lead Generation",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 334,
                        title: "Pay Per Click Advertising",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 335,
                        title: "Link Building",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    },
                    {
                        id: 336,
                        title: "Service 6",
                        class: "sub-label",
                        path: "/",
                        newTab: false,
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Work",
        class: "",
        path: "/",
        newTab: false,
    },
    {
        id: 5,
        title: "Contact",
        class: "",
        path: "/",
        newTab: false,
    },
    {
        id: 6,
        title: "404",
        class: "",
        path: "/404",
        newTab: false,
    }
];
export default MenuHeaderData;
