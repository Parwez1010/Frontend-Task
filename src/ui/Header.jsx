import styled from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";

const StyledHeader = styled.header`
      background-color: #ffffff36;
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid #80808036;
`;
const LogowithIcon = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Post = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    & svg {
    width: 23px;
    height:23px;
    color: grey;
    transition: all 0.3s;
  }
`
const Button = styled.button`
    font-size: 14px;
    padding: 10px 16px;
    font-weight: 500;
    text-align: center;
    border-radius: 8px;
    background-color: blue;
    border: none;
    color: white;
    cursor: pointer;
`

function Header() {
  return <StyledHeader>
    <LogowithIcon>
      <div>logo</div>
      <Post>
        <IoMdNotificationsOutline/>
        <Button> + Post a Job</Button>
      </Post>
    </LogowithIcon>

  </StyledHeader>;
}

export default Header;
