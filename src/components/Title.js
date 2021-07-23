import styled from "styled-components";

const Title = () => {
  return (
    <TitleStyled>
      <div className="header">
        <span className="header__title">
          <b>
            <i>
              media<span className="accent-color">te</span>
            </i>
          </b>
        </span>
        <br />
        <span className="header__subtitle">
          MEDIA{" "}
          <span className="accent-color">
            <b>T</b>O <b>E</b>DUCATE
          </span>
        </span>
        <h2>Generate an AI video with some text and a video of a face!</h2>
      </div>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  .header {
    margin-bottom: 30px;
  }

  .header__title {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 3em;
    margin-bottom: 0px;
    padding: 0;
    font-weight: 700;
  }

  .header__subtitle {
    letter-spacing: 2px;
  }

  .accent-color {
    color: var(--accent-color);
  }
`;

export default Title;
