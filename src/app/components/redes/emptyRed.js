import style from "./red.module.css";
import "tailwindcss/tailwind.css";

export default function EmptyRed({ card }) {
  const styleFlex = "flex-1 items-center justify-center flex flex-col text-center flex-wrap w-[10]";

  // Helper function to chunk array into groups of 3
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  // Create array of available social links
  const socialLinks = [];

  if (card.telefonoMovil) {
    socialLinks.push({
      href: `https://wa.me/${card.telefonoMovil.replace(/[^0-9]/g, '')}`,
      icon: "/images/whatsapp.png",
      label: "Whatsapp"
    });
  }

  if (card.facebook) {
    socialLinks.push({
      href: card.facebook,
      icon: "/images/facebook.png",
      label: "Facebook",
      target: "_blank"
    });
  }

  if (card.instagram) {
    socialLinks.push({
      href: card.instagram,
      icon: "/images/instagram.png",
      label: "Instagram",
      target: "_blank"
    });
  }

  if (card.linkedIn) {
    socialLinks.push({
      href: card.linkedIn,
      icon: "/images/linkedin.png",
      label: "LinkedIn",
      target: "_blank"
    });
  }

  if (card.whatsappBusiness) {
    socialLinks.push({
      href: `https://wa.me/${card.whatsappBusiness.replace(/[^0-9]/g, '')}`,
      icon: "/images/unnamed.png",
      label: "WhatsApp Business"
    });
  }

  if (card.sitioWeb) {
    socialLinks.push({
      href: card.sitioWeb,
      icon: "/images/iconodesitioweb.png",
      label: "Sitio Web",
      target: "_blank"
    });
  }

  if (card.direccionCorreo) {
    socialLinks.push({
      href: `mailto:${card.direccionCorreo}`,
      icon: "/images/iconodecorreo.png",
      label: "E-mail"
    });
  }

  // Chunk the social links into groups of 3
  const rows = chunkArray(socialLinks, 3);

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={style.boxflex}>
          {row.map((link, linkIndex) => (
            <a
              key={`${rowIndex}-${linkIndex}`}
              className={styleFlex}
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              <img src={link.icon} className={style.imgRed} alt={link.label} />
              <p>{link.label}</p>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
} 