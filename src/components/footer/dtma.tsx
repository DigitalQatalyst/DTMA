import socials from "@/assets/img/footer/Social-icons.svg";
import Image from "next/image";

const Footer = () => {
    return (
    <footer className="footer py-4 bg-dark text-white">
      <div className="container" style={{ 
        display: "flex", 
        justifyContent: "space-around", 
        width: "100%"
        }}>

        <p style={{marginLeft: "-25rem"}}>&copy; 2024 <span className="text-white">DTMA</span> </p>
        <Image src={socials} alt="socials" priority style={{ height: 'auto', marginRight: "-20rem" }} />
      </div>
    </footer> 
 
    );
};

export default Footer;