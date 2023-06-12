import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 0 5rem 0;
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

const ServicesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 980px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

const ServicesCard = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #2a2b38 50%, #2a2b38 50%);
  border: 0.1rem solid #ffffff14;
  box-sizing: border-box;
  backdrop-filter: blur(54px);
  border-radius: 0.8rem;
  padding: 2rem;

  div {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-family: var(--font-primary);
    font-size: 1.4rem;
    color: var(--color-white);
    margin-bottom: 0.4rem;
  }

  p {
    font-family: var(--font-circular);
    font-size: 16px;
    color: var(--color-tertiary);
  }
`;

const Services = () => {
  return (
    <div>
      <Section>
        <SectionTitle>
          <h2>Services Made for You!</h2>
          <p>Crafted Solutions Tailored Just for You!</p>
        </SectionTitle>
      </Section>
      <ServicesCards>
        <ServicesCard>
          <div>
            <img src="../../public/png/iconsService1.png" alt="web" />
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </ServicesCard>
        <ServicesCard>
          <div>
            <img src="../../public/png/iconsService3.png" alt="web" />
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </ServicesCard>
        <ServicesCard>
          <div>
            <img src="../../public/png/iconsService2.png" alt="web" />
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </ServicesCard>
      </ServicesCards>
    </div>
  );
};

export default Services;
