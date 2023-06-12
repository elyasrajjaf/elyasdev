import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0 5rem 0;
  width: 980px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  h2 {
    font-family: var(--font-primary);
    font-size: 2.4rem;
    color: var(--color-white);
    margin-bottom: 1.4rem;
    background: linear-gradient(-45deg, var(--color-blue), var(--color-purple), var(--color-blue));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
  }

  p {
    font-family: var(--font-circular);
    font-size: 1.8rem;
    color: var(--color-tertiary);
    width: 86%;
  }
`;

const Contact = () => {
  return (
    <div>
      <Section>
        <SectionTitle>
          <h2>Let’s Talk Togheter!</h2>
          <p>Lorem ipsum more developer mobiles web site coding in France country on ignore this text is just for testing something!</p>
        </SectionTitle>
      </Section>
    </div>
  );
};

export default Contact;
