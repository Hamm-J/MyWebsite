import React from "react"
import {
  AboutContainer,
  ExperienceTitle,
  Position,
  Date,
  Description,
} from "./About.styled"
import SectionTitle from "../Common/SectionTitle/Index"

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>About</SectionTitle>
      <Description>After pursuing...</Description>
      {/* TODO: map over each experience */}
      <ExperienceTitle>Cornell University</ExperienceTitle>
      <Position>Student</Position>
      <Date>2016 - 2018</Date>
      <Description>
        Originally interested in pursuing a career in medicine
      </Description>
    </AboutContainer>
  )
}

export default About