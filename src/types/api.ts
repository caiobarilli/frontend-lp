export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  titulo: string
  subtitle: string
  button: {
    title: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
}
