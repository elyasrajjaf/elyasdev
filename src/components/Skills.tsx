import styled from "styled-components";

const SectionSkills = styled.section`
  background: #050810;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10rem 0 3rem 0;
  width: 980px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  h2 {
    font-family: var(--font-primary);
    font-size: 2.4rem;
    color: var(--color-white);
    margin-bottom: 0.4rem;
    background: linear-gradient(-45deg, var(--color-blue), var(--color-purple), var(--color-blue));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
  }

  p {
    font-family: var(--font-circular);
    font-size: 16px;
    color: var(--color-tertiary);
  }
`;

const SkillsContainer = styled.div`
  @keyframes reviewCardAnim1 {
    from {
      transform: translateX(-52%);
    }
    to {
      transform: translateX(0%);
    }
  }

  display: flex;
  margin-top: 2rem;
  width: max-content;
  overflow-x: hidden;

  animation: reviewCardAnim1 20s ease-in-out infinite alternate;

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary);
  border-radius: 0.4rem;
  padding: 1.8rem 2rem;
  margin-right: 1.2rem;
  transition: all 0.2s ease-in-out;

  p {
    font-family: var(--font-circular);
    font-size: 20px;
    color: var(--color-white);
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SkillContainerSecond = styled(SkillsContainer)`
  @keyframes reviewCardAnim2 {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-52%);
    }
  }

  padding-bottom: 7rem;

  animation: reviewCardAnim2 20s ease-in-out infinite alternate;

  &:hover {
    animation-play-state: paused;
  }
`;

const Skills = () => {
  const skillsName = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Styled Components",
    "NextJS",
    "GatsbyJS",
    "GraphQL",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "SaaS Development",
    "Web Development",
    "App Mobile Development",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "GitHub",
    "GitLab",
    "Frontend Development",
    "Backend Development",
    "Figma",
    "React Native",
  ];

  return (
    <SectionSkills>
      <Section>
        <SectionTitle>
          <h2> Expertise and Skills Amplified!</h2>
          <p>Supercharged Skillset at Your Service!</p>
        </SectionTitle>
      </Section>
      <SkillsContainer>
        {skillsName?.map((skill, index) => (
          <SkillCard key={index}>
            <p>{skill}</p>
          </SkillCard>
        ))}
      </SkillsContainer>
      <SkillContainerSecond>
        {skillsName?.sort().map((skill, index) => (
          <SkillCard key={index}>
            <p>{skill}</p>
          </SkillCard>
        ))}
      </SkillContainerSecond>
    </SectionSkills>
  );
};

export default Skills;
