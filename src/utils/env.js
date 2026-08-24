export const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const env = process.env.NEXT_PUBLIC_ENV;
export const dataSrc = process.env.DATA_SRC;

// URL usada pelas chamadas que rodam no servidor (getStaticProps/getStaticPaths).
// O Strapi está na mesma máquina, então falar com ele por 127.0.0.1 evita sair
// pela internet e voltar pelo nginx só para se alcançar. Qualquer problema de
// TLS/DNS nesse caminho congela o ISR em silêncio — foi o que aconteceu em 2026.
export const serverApiURL = process.env.STRAPI_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL;
