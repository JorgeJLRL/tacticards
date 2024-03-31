import {Montserrat, Lusitana, } from 'next/font/google' //descarga la fuente e importamos desde el servidor el font family
export const montserrat = Montserrat({subsets:['latin'], weight: "400"}) // subsets son los caracteres elegimos latin y exportamos
export const luisitana = Lusitana({weight:['400','700'], subsets:['latin']})
