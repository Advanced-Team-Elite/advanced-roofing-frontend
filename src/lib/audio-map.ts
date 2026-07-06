// lib/audio-map.ts
// Diccionario de rutas → audio pre-generado (ElevenLabs, subido a Cloudinary).
// Cualquier ruta que NO esté aquí cae automáticamente a Web Speech API.

export const PREGENERATED_AUDIO: Record<string, string> = {
    '/': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365919/Home_e7polt.mp3',
    '/about-us': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365918/About_us_x5xjpv.mp3',
    '/roofing/emergency-roof-repairs': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365918/Emergency_Roof_Repair_jbxf7n.mp3',
    '/roofing/roof-installation-replacement': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365914/Roof_Installation_Replacement_zbyr1l.mp3',
    '/roofing/skylight-installation': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365914/Skylight_Installation_xaqrx2.mp3',
    '/roofing/storm-damage-repair': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365913/Storm_Damage_Repair_ebarxx.mp3',
    '/contact-us': 'https://res.cloudinary.com/dca79rb3c/video/upload/v1783365913/contact_Us_eg029p.mp3',
};

// Normaliza: quita trailing slash excepto en la home ("/")
const normalizePath = (path: string): string => {
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
    return path;
};

// Devuelve la URL de audio pre-generado para una ruta, o null si no existe.
export const getPregeneratedAudio = (pathname: string): string | null => {
    const normalized = normalizePath(pathname);
    return PREGENERATED_AUDIO[normalized] ?? null;
};