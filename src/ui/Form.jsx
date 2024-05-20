import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: #ff000081;
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 100%;
`;

const FormBox = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95%;
  width: 620px;
  padding: 3.2rem;
`;

const CheckBoxes = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;

  & label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    & input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: green;
    }
  }
`;
function Form() {
  return (
    <StyledWrapper>
      <FormBox>
        <h2>Contact us</h2>
        <form>
          <CheckBoxes>
            <label>
              <input type="checkbox" />
              Request a quote
            </label>
            <label>
              <input type="checkbox" />
              Cutting Machinery Info
            </label>
            <label>
              <input type="checkbox" />
              RSpare Parts & Service
            </label>
          </CheckBoxes>
        </form>
      </FormBox>
    </StyledWrapper>
  );
}

export default Form;
