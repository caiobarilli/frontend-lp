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

export type IntroProps = {
  title: string
  text: string
  image: {
    alternativeText: string
    url: string
  }
}

export type TechIcons = {
  title: string
  image: {
    alternativeText: string
    url: string
  }
}
export type TechProps = {
  title: string
  techs: TechIcons[]
}

export type CourseList = {
  id: number
  description: string
}
export type CourseProps = {
  title: string
  courses: CourseList[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionIntro: IntroProps
  sectionTech: TechProps
  sectionCourse: CourseProps
}
