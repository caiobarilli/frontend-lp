export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
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

export type CourseListProps = {
  id: number
  description: string
}
export type CourseProps = {
  title: string
  courses: CourseListProps[]
}

export type ModulesListProps = {
  id: number
  title: string
  subtitle: string
  description: string
}
export type ModulesProps = {
  title: string
  modules: ModulesListProps[]
}

export type CardsListProps = {
  id: number
  fullPrice: number
  parcels: number
  parcelPrice: number
  price: number
  content: string
  ButtonUrl: string
  ButtonText: string
}
export type AboutProps = {
  title: string
  text: string
  cardPlans: CardsListProps[]
}

export type SocialNetwork = {
  id: number
  url: string
  socialNetwork: string
}
export type AuthorProps = {
  id: number
  photo: {
    alternativeText: string
    url: string
  }
  fullName: string
  role: string
  description: string
  socialNetworks: SocialNetwork[]
}
export type TeamProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewListProps = {
  id: number
  photo: {
    alternativeText: string
    url: string
  }
  fullname: string
  description: string
}
export type ReviewsProps = {
  id: number
  title: string
  reviews: ReviewListProps[]
}

export type QuestionsProps = {
  id: number
  title: string
  description: string
}
export type FaqProps = {
  id: number
  title: string
  questions: QuestionsProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionIntro: IntroProps
  sectionTech: TechProps
  sectionCourse: CourseProps
  sectionModule: ModulesProps
  sectionAbout: AboutProps
  sectionTeam: TeamProps
  sectionReview: ReviewsProps
  sectionFaq: FaqProps
}
