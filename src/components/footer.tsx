import IconButton from "@material-tailwind/react/components/IconButton";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a
            href="https://www.material-tailwind.com"
            target="_blank"
            className="text-gray-900 text-lg font-semibold"
          >
            International Designer League
          </a>
          
          <div
            className="flex justify-center text-sm my-4 md:my-0 w-max mx-auto items-center gap-4 text-blue-gray-500"
          >
            &copy; {CURRENT_YEAR} copyright rizad. All rights reserved
          </div>
          
          <div className="flex w-fit justify-center gap-2">
            <IconButton 
              size="sm" 
              color="gray" 
              variant="text" 
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text"
              placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
