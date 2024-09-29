import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const baseSiteConfig = {
  name: "A Vision for Tomorrow",
  description:
    "Imagine a world where resources are shared equitably, where every child has access to education, and where differences are celebrated rather than condemned. This vision is achievable, but it requires commitment from each of us. Let us join hands across borders, transcending language, culture, and background, to advocate for a peaceful coexistence.",
  url: "https://google.com",
  ogImage: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  metadataBase: '/',
  keywords: ["next.js starter", "next.js template", "awesome starter", "study next.js"],
  authors: [
    {
      name: "Hello Kitty",
      url: "https://google.com",
      twitter: 'https://google.com',
    }
  ],
  creator: '@weijunext',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
  headerLinks: [
    { name: 'repo', href: "https://google.com", icon: BsGithub },
    { name: 'twitter', href: "https://google.com", icon: BsTwitterX },
  ],
  footerLinks: [
    { name: 'email', href: "mailto:ap66.ron@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://google.com", icon: BsTwitterX },
    { name: 'github', href: "https://google.com", icon: BsGithub },
    { name: 'google', href: "https://google.com", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://nextjs.org/', name: 'NEXT.js' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/logo.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/logo.png`],
    creator: baseSiteConfig.creator,
  },
}
