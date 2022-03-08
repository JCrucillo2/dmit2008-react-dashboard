import styled from "styled-components";

const AppBarStyles = styled.nav`
    position: relative;
    box-shadow: 0 0 2px 1px grey;
    padding: 1.175rem;
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li``;

const AppBarItemGroup = styled.li`
    display: flex;
    gap: 0.25rem;
`;

export { AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup };
