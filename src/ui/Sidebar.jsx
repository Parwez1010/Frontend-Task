import styled from "styled-components";
// import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color:#718ff40a;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid #718ff40a;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <Logo /> */}
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
