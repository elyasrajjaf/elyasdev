import { Projects } from "../constants";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 0 5rem 0;
  width: 980px;
  margin: 0 auto;
`;

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  margin: 0 auto;
  width: 980px;
  margin-bottom: 8rem;
`;

const Button = styled.button`
  all: unset;
  color: var(--color-white) !important;
  font-family: var(--font-circular);
  background: linear-gradient(to right, #7343ff, #29b6fb);
  background-clip: padding-box;
  -webkit-background-clip: padding-box;
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
  padding: 1rem 5rem;
  border-radius: 0.3rem;
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const CardBackground = styled.div`
  width: 100%;
  margin: 4rem auto;
  background: linear-gradient(180deg, #2a2b38 50%, #2a2b38 50%);
  border: 0.1rem solid #ffffff14;
  box-sizing: border-box;
  backdrop-filter: blur(54px);
  border-radius: 0.8rem;
  padding: 3rem;
  z-index: 999;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -5rem;
    right: -5rem;
    width: 15rem;
    height: 15rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const CardBackgroundLast = styled(CardBackground)`
  h3 {
    margin-top: 6rem;
    font-size: 2.7rem !important;
  }

  p {
    color: #ffffff;
    font-size: 1.3rem;
    margin: 1rem 0 5rem 0;
    font-family: var(--font-circular);
  }
`;

const NumberImg = styled.div`
  position: relative;
  width: 19rem;
  img {
    position: absolute;
    top: -3rem;
    right: -13rem;
    z-index: -1;
  }
`;

const CardTitle = styled.h3`
  margin-top: 1.4rem;
  font-size: 2.4rem;
  color: #ffffff;
  font-family: var(--font-primary);

  span {
    background: linear-gradient(-45deg, var(--color-blue), var(--color-purple), var(--color-blue));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
  }
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

const ImageCard = styled.div`

  img {
    width: 100% !important;
    height: 100% !important;
  }

  img:nth-child(2) {
    display: none;
  }
`;

const ProjectSection = () => {
  const changeImageHover = (e: any) => {
    const img = e.target;
    const img2 = img.nextSibling;
    img.style.display = "none";
    img2.style.display = "block";
    img2.style.cursor = "pointer";

    img2.addEventListener("mouseleave", () => {
      img.style.display = "block";
      img2.style.display = "none";
    });
  };

  return (
    <div>
      <Section>
        <SectionTitle>
          <h2>Best Projects</h2>
          <p>Each project is unique. Here are some of my works.</p>
        </SectionTitle>
      </Section>
      <GridTemplate>
        {Projects.map((project) => (
          <div key={project.id}>
            <NumberImg>
              <img src={project.number} alt={project.title} width={190} height={185} />
            </NumberImg>
            <CardBackground>
              <ImageCard className="project-card" onMouseEnter={changeImageHover}>
                <img src={project.first_image} alt={project.title} />
                <img src={project.second_image} alt={project.title} />
              </ImageCard>
              <CardTitle>
                {project.title} <br /> {project.title_part}
              </CardTitle>
            </CardBackground>
          </div>
        ))}
        <CardBackgroundLast>
          <CardTitle>
            Unlock the potential of your dream <span>project</span>!
          </CardTitle>
          <p>The fourth box awaits your vision. </p>
          <Button>Contact me now !</Button>
        </CardBackgroundLast>
      </GridTemplate>
    </div>
  );
};

export default ProjectSection;
