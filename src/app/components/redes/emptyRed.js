import style from "./red.module.css";
import "tailwindcss/tailwind.css";

export default function EmptyRed({ card }) {
  const styleFlex = "items-center justify-center flex flex-col text-center flex-wrap";

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
      href: `https://wa.me/${card.telefonoMovil.replace(/[^0-9]/g, "")}`,
      icon: "whatsapp.png",
      label: "Whatsapp",
    });
  }

  if (card.facebook) {
    socialLinks.push({
      href: card.facebook,
      icon: "facebook.png",
      label: "Facebook",
      target: "_blank",
    });
  }

  if (card.instagram) {
    socialLinks.push({
      href: card.instagram,
      icon: "instagram.png",
      label: "Instagram",
      target: "_blank",
    });
  }

  if (card.linkedIn) {
    socialLinks.push({
      href: card.linkedIn,
      icon: "linkedin.png",
      label: "LinkedIn",
      target: "_blank",
    });
  }

  if (card.whatsappBusiness) {
    socialLinks.push({
      href: `https://wa.me/${card.whatsappBusiness.replace(/[^0-9]/g, "")}`,
      icon: "unnamed.png",
      label: "WhatsApp Business",
    });
  }

  if (card.sitioWeb) {
    socialLinks.push({
      href: card.sitioWeb,
      icon: "iconodesitioweb.png",
      label: "Sitio Web",
      target: "_blank",
    });
  }

  if (card.direccionCorreo) {
    socialLinks.push({
      href: `mailto:${card.direccionCorreo}`,
      icon: "iconodecorreo.png",
      label: "E-mail",
    });
  }

  card.redes?.forEach((red) => {
    socialLinks.push({
      href: red.linkRed,
      icon: red.iconoRed,
      label: red.nombreRed,
      isCustom: red.isCustom,
    });
  });

  // Chunk the social links into groups of 3
  const rows = chunkArray(socialLinks, 3);
  function formatLink(href) {
    if (!href) return "#";

    // ✅ Caso email
    if (href.includes("@") && !href.startsWith("mailto:")) {
      return `mailto:${href}`;
    }

    // ✅ Caso URL con http/https
    if (href.startsWith("http://") || href.startsWith("https://")) {
      return href;
    }

    // ✅ Caso URL sin protocolo
    return `https://${href}`;
  }

  return (
    <div style={{ paddingBottom: "2rem" }}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={style.boxflex}>
          {row.map((link, linkIndex) => (
            <a
              key={`${rowIndex}-${linkIndex}`}
              className={style.styleflex}
              href={
                link.href.startsWith("http") || link.href.startsWith("https") || link.href.startsWith("mailto:")
                  ? link.href
                  : formatLink(link.href)
              }
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              <img
                src={!link.isCustom ? `/images/${link.icon}` : link.icon}
                className={style.imgRed}
                alt={link.label}
              />
              <p>{link.label}</p>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
