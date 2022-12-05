import styled, { css } from "styled-components";

const RootWrapper = styled.div`${() => css`
  &.root-component{
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      height: 35px;
      gap: 20px;
      padding: 10px;
      padding-bottom: 20px;
      justify-content: center;
      border-bottom: 1px solid #333;

      > button {
        flex: 1;
        max-width: 200px;
      }
    }

    .body {
      flex: 1;
    }
  }
`}`;

export default RootWrapper;
