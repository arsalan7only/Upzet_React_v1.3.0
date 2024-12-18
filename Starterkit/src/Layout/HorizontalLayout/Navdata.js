import React, { useState } from "react";

const Navdata = () => {
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [pages, setpages] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  const NavnavData = [
    {
      id: 1,
      label: "Dashboard",
      icon: "mdi mdi-home-variant-outline me-2",
      isdropDown: true,
      click: function () {
        setui(false);
        setapp(false);
        setcomponent(false);
        setpages(false);
      },
    },
    {
      id: 5,
      label: "Pages",
      icon: "ri-file-copy-2-line me-2",
      click: function () {
        setpages(!pages);
        setui(false);
        setapp(false);
        setcomponent(false);

        setutility(false);
        setauth(false);
      },
      currentState: pages,
      subItems: [
        {
          label2: "Authentication",

          staclick: function () {
            setauth(!auth);
            setutility(false);

            setui(false);
            setapp(false);
            setcomponent(false);
          },
          subState: auth,
          subItem: [
            { link: "/#", title: "Login" },
            { link: "/#", title: "Register" },
            { link: "/#", title: "Recover Password" },
            { link: "/#", title: "Lock Screen" },
          ],
        },
        {
          label2: "Utility",
          staclick: function () {
            setutility(!utility);
            setauth(false);

            setui(false);
            setapp(false);
            setcomponent(false);
          },
          subState: utility,
          subItem: [
            { link: "/#", title: "Starter Page" },
            { link: "/#", title: "Maintenance" },
            { link: "/#", title: "Coming Soon" },
            { link: "/#", title: "Timeline" },
            { link: "/#", title: "FAQs" },
            { link: "/#", title: "Pricing" },
            { link: "/#", title: "Error 404" },
            { link: "/#", title: "Error 500" },
          ],
        },
      ],
    },
  ];
  return <React.Fragment>{NavnavData}</React.Fragment>;
};

export default Navdata;
