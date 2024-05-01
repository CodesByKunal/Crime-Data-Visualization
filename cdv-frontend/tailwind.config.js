/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        chart:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRQQ-s3SnV3HFUmpKICEQ3S3tmF1flh-fdpdgiMvj&s)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        yt: "#0f0f0f",
        "yt-h": "#272727",
      },
    },
  },
  plugins: [],
};
