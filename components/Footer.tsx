import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t mt-5 border-gray-100">
      <div className="flex px-6 py-10 max-md:flex-col justify-between gap-5 sm:px-16">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image src={"/logo.svg"} alt="logo" width={118} height={18} className="object-contain" />
        <p className="text-base text-gray-700">
          Carhub 2023 <br /> All right reserved &copy;
        </p>
      </div>
      <div className="footer_links flex">
          {footerLinks.map((link)=>(
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {
                  link.links.map((item)=>(
                    <Link
                    href={item.url}
                    key={item.title}
                    className="text-gray-500"
                    >{item.title}</Link>
                  ))
                }
              </div>
            ))}
      </div>
      </div>
      
    </footer>
  )
}

export default Footer