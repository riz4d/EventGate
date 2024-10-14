import IconButton from "@material-tailwind/react/components/IconButton";
import Link from "next/link";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a
            href="https://github.com/riz4d"
            target="_blank"
            className="text-gray-900 text-lg font-semibold"
          >
            EventGate
          </a>
          
          <div
            className="flex justify-center text-sm my-4 md:my-0 w-max mx-auto items-center gap-4 text-blue-gray-500"
          >
            &copy; {CURRENT_YEAR} copyright rizad. All rights reserved
          </div>
          
          <div className="flex w-fit justify-center gap-2">
          <Link href="https://github.com/riz4d">
            <IconButton 
              size="sm" 
              color="gray" 
              variant="text" 
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/mohamedrizad/">
            <IconButton size="sm" color="gray" variant="text"
              placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            </Link>
            <Link href="https://instagram.com/riz.4d">
            <IconButton size="sm" color="gray" variant="text" placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
