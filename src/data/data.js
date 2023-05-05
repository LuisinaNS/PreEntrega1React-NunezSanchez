import imagen1 from "./images/CristalMono1.jpg";
import imagen2 from "./images/CristalMono2.jpg";
import imagen3 from "./images/CristalMono3.jpg";
import imagen4 from "./images/CristalMulti1.jpg";
import imagen5 from "./images/CristalMulti2.jpg";
import imagen6 from "./images/CristalMulti3.jpg";
import imagen7 from "./images/LCMono1.jpg";
import imagen8 from "./images/LCMono2.jpg";
import imagen9 from "./images/LCMono3.jpg";
import imagen10 from "./images/LCMulti1.jpg";
import imagen11 from "./images/LCMulti2.jpg";
import imagen12 from "./images/LCMulti3.jpg";
import imagen13 from "./images/ArmazonReceta1.jpg";
import imagen14 from "./images/ArmazonReceta2.jpg";
import imagen15 from "./images/ArmazonReceta3.jpg";
import imagen16 from "./images/Sol1.jpg";
import imagen17 from "./images/Sol2.jpg";
import imagen18 from "./images/Sol3.jpg";

const elementos = [

    {
        id: 1,
        nombre: "Monofocal Asférico Hi-Idex",
        categoria: "Cristales",
        imagen: imagen1,
        descripcion: "Extremadamente livianos y delgados, estéticos, alta resistencia a rotiras, visión nítida hasta los bordes.",
        precio: 24000,
        stock: 15
    },

    {
        id: 2,
        nombre: "Monofocal Tallado Mid-Index",
        categoria: "Cristales",
        imagen: imagen2,
        descripcion: "Muy estéticos por su delgadez, visión más aguda con contraste más elevado hasta el borde del lente, visión perfecta, especialmente también al atardecer, excelente percepción espacial, copatibilidad espontánea excepcional.",
        precio: 25000,
        stock: 15
    },

    {
        id: 3,
        nombre: "Monofocal Convencional Low-Index",
        categoria: "Cristales",
        imagen: imagen3,
        descripcion: "Lentes monofocales con calidad de marca excepcional, hasta un 45% más ligeros en comparación con las de cristal mineral, hasta un 20% más delgados en comparación con lentes de plástico convencionales, gran comodidad de uso.",
        precio: 22000,
        stock: 15
    },

    {
        id: 4,
        nombre: "Multifocal Personalizado",
        categoria: "Cristales",
        imagen: imagen4,
        descripcion: "Para los usuarios más exigente, medición de facciones y postura visual del usuario, mayor campo visual, nuevo desarrollo geométrico de la zona óptica, transición natural entre la visión de lejos y cerca, reducción total de aberraciones horizontales, única categoría con índice de refracción 1.74, adaptación garantizada.",
        precio: 30000,
        stock: 15
    },

    {
        id: 5,
        nombre: "Multifocal Corredor Amplio",
        categoria: "Cristales",
        imagen: imagen5,
        descripcion: "Para una visión más dinámica y flexible, mayor visión periférica, gran comodidad y versatilidad en su uso cotidiano, transsisión natural entre visión de lejos y cerca, notrable reducciión de aberraciones horizontales y adaptabilidad.",
        precio: 32100,
        stock: 15
    },

    {
        id: 6,
        nombre: "Multifocal Corredor Medio",
        categoria: "Cristales",
        imagen: imagen6,
        descripcion: "Para ver bien a todas distancias, ideal para primeros usuarios progresivos, disponibles en tallado tecnología digital, adaptación fácil e inmediata, buen balance visual y suave transición entre zonas, gran adaptabilidad.",
        precio: 34300,
        stock: 15
    },

    {
        id: 7,
        nombre: "ACUVUE 1-DAY MOISTx30",
        categoria: "Lentes de Contacto",
        imagen: imagen7,
        descripcion: "LC MONOFOCALES, Lentes de Contacto.",
        precio: 10800,
        stock: 10
    },

    {
        id: 8,
        nombre: "AIR OPTIX PLUS HYDRAGLYDE",
        categoria: "Lentes de Contacto",
        imagen: imagen8,
        descripcion: "LC MONOFOCALES, Lentes de Contacto.",
        precio: 15000,
        stock: 10
    },

    {
        id: 9,
        nombre: "DAILIES AQUACOMFORT PLUS [x10]",
        categoria: "Lentes de Contacto",
        imagen: imagen9,
        descripcion: "LC MONOFOCALES, Lentes de Contacto.",
        precio: 12700,
        stock: 10
    },

    {
        id: 10,
        nombre: "AIR OPTIX MULTIFOCAL HYDRAGLYDE",
        categoria: "Lentes de Contacto",
        imagen: imagen10,
        descripcion: "LC MULTIFOCALES, Lentes de Contacto.",
        precio: 25200,
        stock: 10
    },

    {
        id: 11,
        nombre: "PROCLEAR MULTIFOCAL",
        categoria: "Lentes de Contacto",
        imagen: imagen11,
        descripcion: "LC MULTIFOCALES, Lentes de Contacto.",
        precio: 17500,
        stock: 10
    },

    {
        id: 12,
        nombre: "SOFLENS MULTIFOCAL",
        categoria: "Lentes de Contacto",
        imagen: imagen12,
        descripcion: "LC MULTIFOCALES, Lentes de Contacto.",
        precio: 20500,
        stock: 10
    },

    {
        id: 13,
        nombre: "VULK TRYAL",
        categoria: "Recetados",
        imagen: imagen13,
        descripcion: "Vulk The Tryal Cry 206.",
        precio: 22000,
        stock: 3
    },

    {
        id: 14,
        nombre: "VULK YORDU",
        categoria: "Recetados",
        imagen: imagen14,
        descripcion: "Vulk Yordu Mblk 206.",
        precio: 22000,
        stock: 2
    },

    {
        id: 15,
        nombre: "RAY-BAN BLACK",
        categoria: "Recetados",
        imagen: imagen15,
        descripcion: "Ray-Ban ORX6362 2509, Black Demo Lens.",
        precio: 44370,
        stock: 1
    },

    {
        id: 16,
        nombre: "RUSTY ZINZ",
        categoria: "Anteojos de Sol",
        imagen: imagen16,
        descripcion: "Rusty ZINZ MBLK S10 Polarizado.",
        precio: 19880,
        stock: 5
    },

    {
        id: 17,
        nombre: "VULK SATISFY",
        categoria: "Anteojos de Sol",
        imagen: imagen17,
        descripcion: "Vulk Satusfy Sblk B19.",
        precio: 21547,
        stock: 3
    },

    {
        id: 18,
        nombre: "VULK GIFT",
        categoria: "Anteojos de Sol",
        imagen: imagen18,
        descripcion: "Vulk Gift Sblk S10 Polarizado.",
        precio: 25190,
        stock: 3
    },
]

export default elementos;