const SidebarData = [
    {
        label: "Menu",
        isMainMenu: true,
    },
    {
        label: "Dashboard",
        icon: "mdi mdi-home-variant-outline",
        url: "/dashboard",
        issubMenubadge: true,
        // bgcolor: "bg-primary",
        // badgeValue: ""
    },
    {
        label: "Pages",
        isMainMenu: true,
    },
    {
        label: "Utility",
        icon: "mdi mdi-format-page-break",
        subItem: [
            { sublabel: "Starter Page", link: "/#" },
            { sublabel: "Maintenance", link: "/#" },
            { sublabel: "Coming Soon", link: "/#" },
            { sublabel: "Timeline", link: "/#" },
            { sublabel: "FAQs", link: "/#" },
            { sublabel: "Pricing", link: "/#" },
            { sublabel: "Error 404", link: "/#" },
            { sublabel: "Error 500", link: "/#" },
        ],
    },
]
export default SidebarData;