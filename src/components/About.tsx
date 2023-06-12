import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
  width: 980px;
  margin: 0 auto;
`;

const TextAbout = styled.p`
  color: var(--color-tertiary);
  font-family: var(--font-circular);
  font-size: 16px;
  line-height: 1.3rem;
`;

const About = () => {
  return (
    <div>
      <Container>
        <TextAbout>
          Welcome to elyasdev, where digital dreams come alive! I&rsquo;m Elyas, a skilled web and
          mobile developer with a passion for crafting captivating online experiences. By blending
          elegant design with powerful code, I bring your brand to life and leave a lasting
          impression on your audience.
          <br />
          <br />
          Let&rsquo;s embark on a collaborative journey and transform your online presence into a
          mesmerizing success story.
        </TextAbout>
      </Container>
    </div>
  );
};

export default About;
