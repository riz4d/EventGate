import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            International Designer League
          </Typography>
          

        <Typography
          color="blue-gray"
          className="flex justify-center text-sm my-4 md:my-0 w-max mx-auto items-center gap-4"
        >
          &copy; {CURRENT_YEAR} copyright rizad.All rights reserved
        </Typography>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
