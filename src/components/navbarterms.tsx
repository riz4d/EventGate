import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  TicketIcon,
  UserGroupIcon,
  InformationCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Get Ticket",
    icon: TicketIcon,
    href: "./#ticket",
  },
  {
    name: "terms",
    icon: UserGroupIcon,
    href: "/terms",
  },
  {
    name: "About",
    icon: InformationCircleIcon,
    href: "/about",
  },
];

export function Navbarterms() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={true}
      color={isScrolling ? "white" : "transparent"} // Change this to your desired solid color
      className="fixed top-0 z-50 border-0"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "black" : "black"}
          className="text-lg font-bold"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          EventGate
        </Typography>
        
        <div className="hidden items-center gap-4 lg:flex">
        <Link href="./#ticket">
          <Button color={isScrolling ? "black" : "black"} variant="text" placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}>
            Get Ticket
          </Button>
          </Link>
          <Link href="/terms">
          <Button color={isScrolling ? "black" : "black"} variant="text" placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}>
            Terms
          </Button>
          </Link>
          <Link href="/about">
          <Button color={isScrolling ? "black" : "black"} variant="text" placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}>
            About
          </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "black" : "black"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbarterms;
