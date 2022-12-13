import styled from "styled-components";
import { RestaurantCornerText } from "../Global/Paragraph";

const StyledRestaurant = styled.section`
  position: relative;
  height: max-content;
  width: 30%;
  display: flex;
  flex-flow: column nowrap;
  margin: 2rem 0;
  &:hover {
    cursor: pointer;
  }
`;

const MainInfoContainer = styled.div`
  position: relative;
  height: 40rem;
  width: 100%;
  border: 0.4rem solid #ff4b00cc;
  border-radius: 1.5rem;
  overflow: hidden;
`;
const SubInfoContainer = styled.div`
  position: relative;
  height: max-content;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 1.6rem;
  }
`;

const RestaurantCoverImage = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  /* background-image: ; */
  background-size: cover;
  background-repeat: no-repeat;

  ${(props) => (props.name === `Chick-Fil-A` ? `background-image: url(${require("./../../src/Chick-Fil-A.jpeg")})` : null)}
  ${(props) => (props.name === `Panda Express` ? `background-image: url(${require("./../../src/Panda-Express.jpeg")})` : null)}
  ${(props) => (props.name === `Cafe Rio` ? `background-image: url(${require("./../../src/Cafe-Rio.jpeg")})` : null)}
  ${(props) => (props.name === `Cafe Zupas` ? `background-image: url(${require("./../../src/Zupas.jpeg")})` : null)}
  ${(props) => (props.name === `Jimmy John's` ? `background-image: url(${require("./../../src/Jimmy-Johns.jpeg")})` : null)}
  ${(props) => (props.name === `Kneaders` ? `background-image: url(${require("./../../src/Kneaders.jpeg")})` : null)}
`;

const ExpenseLevelContainer = styled.div`
  position: absolute;
  height: max-content;
  width: max-content;
  min-width: 4rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: 1rem solid #ff4b00cc;
  background-color: #ff4b00cc;
  border-bottom-left-radius: 1.5rem;
  top: 0;
  right: 0;
  & p {
    font-size: 2rem;
    color: #fefefecc;
  }
`;

export const Restaurant = function (props) {
  const { name, categories, deliveryTime, deliveryFee, expenseLevel, style } = props.restaurant;
  console.log(props, style);
  return (
    <StyledRestaurant>
      <MainInfoContainer>
        <RestaurantCoverImage name={name} />
        <ExpenseLevelContainer>
          <p>{expenseLevel}</p>
        </ExpenseLevelContainer>
        <RestaurantCornerText bottom="1rem" left="2rem" color="#ff4b00cc" bgStyle={style}>
          {name}
        </RestaurantCornerText>
        <RestaurantCornerText bottom="1rem" right="2rem" color="#ff4b00cc" bgStyle={style}>
          {deliveryFee}
        </RestaurantCornerText>
      </MainInfoContainer>
      <SubInfoContainer>
        <p>{categories && categories.join(" · ")}</p>
        <p>{deliveryTime}</p>
      </SubInfoContainer>
    </StyledRestaurant>
  );
};
