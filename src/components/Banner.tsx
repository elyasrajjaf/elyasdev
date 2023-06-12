import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
  width: 980px;
  margin: 0 auto;
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

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroHeading = styled.h1`
  font-size: 5.5rem;
  letter-spacing: -0.03em;
  font-family: var(--font-primary);
  line-height: 100%;
  color: var(--color-white);
  position: relative;
  text-align: center;
  margin-bottom: 6rem;
`;

const GradientText = styled.span`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(
    -45deg,
    var(--color-blue),
    var(--color-purple),
    var(--color-blue),
    var(--color-purple)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
`;

const Banner = () => {
  return (
    <div>
      <Container>
        <HeaderWrapper>
          <HeroHeading>
            <div>
              <span>Turning ideas into</span> <br />
              <span>real life</span> <GradientText>projects</GradientText> <br />
              <span>is my calling.</span>
            </div>
          </HeroHeading>
          <Button>Let&rsquo;s Talk!</Button>
        </HeaderWrapper>
        <div></div>
      </Container>
    </div>
  );
};

export default Banner;
