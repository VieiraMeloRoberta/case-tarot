import styled from "styled-components";
import background from "../../assets/background.jpg";

export const CardContent = styled.article`
  background-image: url(${background});
  display: flex;
  flex-direction: column;
  max-width: 186px;
  padding: 10px;
  border-radius: 12px;

  :hover {
    transform: rotateY(180deg);
  }
`;

export const Scene = styled.article`
  width: 200px;
  height: 440px;
  perspective: 600px;

  .is-flipped {
    transform: rotateY(180deg);
  }
  .card__face--front {
    background-image: url(${background});
    transform: rotateY(180deg);
    box-shadow: 0 0 1rem #536d88;
    border-radius: 10px;
    img {
      width: 172px;
      display: block;
      margin: auto;
      border-radius: 10px;
    }
  }
  .card__face--back {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

export const CardInfo = styled.div`
  border: 1px solid #000;
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CardDescription = styled.div`
  font-family: "Berkshire Swash", cursive;
  text-align: center;
  margin-top: 5px;
`;
