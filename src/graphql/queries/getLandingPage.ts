const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment imgData on UploadFile {
    alternativeText
    url
  }

  fragment header on LandingPage {
    header {
      title
      subtitle
      button {
        title
        url
      }
      image {
        ...imgData
      }
    }
  }

  fragment intro on LandingPage {
    sectionIntro {
      title
      text
      image {
        ...imgData
      }
    }
  }

  fragment tech on LandingPage {
    sectionTech {
      title
      techs {
        title
        image {
          ...imgData
        }
      }
    }
  }

  fragment course on LandingPage {
    sectionCourse {
      title
      courses {
        id
        description
      }
    }
  }

  fragment modules on LandingPage {
    sectionModule {
      title
      modules {
        id
        title
        subtitle
        description
      }
    }
  }

  fragment about on LandingPage {
    sectionAbout {
      title
      text
      cardPlans {
        id
        fullPrice
        parcels
        parcelPrice
        price
        content
        ButtonUrl
        ButtonText
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...intro
      ...tech
      ...course
      ...modules
      ...about
    }
  }
`

export default GET_LANDING_PAGE
