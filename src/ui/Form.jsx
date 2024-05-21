import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { toggleFormOpen } from "./uiSlice";

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 10;
  height: 100%;
  width: 100%;
`;

const FormBox = styled.div`
  background-color: #fff;
  position: absolute;
  overflow: hidden;
  display: grid;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95%;
  width: 620px;
  @media (max-width: 768px) {
    width: 95%;
  }

  padding: 3.2rem 2.2rem 3.2rem 3.2rem;
  border-radius: 12px;

  & h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 25px;
  }
`;

const Scroll = styled.div`
  height: 100%;
  /* background-color: red; */
  overflow-y: scroll;
  padding-right: 1rem;

  width: 100%;

  &::-webkit-scrollbar {
    position: absolute;
    width: 5px;
    background-color: #eef6ee;
  }

  &::-webkit-scrollbar-thumb {
    background: #d0d4d0;
    border-radius: 10px;
  }
`;

const CheckBoxes = styled.div`
  display: flex;
  margin: 3.2rem 0;
  gap: 15px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  & a {
    color: #009035;
  }

  & input[type="checkbox"],
  & input[type="radio"] {
    position: relative;
    appearance: none;

    &:checked::before {
      display: block;
    }
  }

  & input[type="checkbox"] {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;

    &::before {
      width: 6px;
      height: 10px;
      position: absolute;
      display: none;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      border-bottom: 2px solid#fff;
      border-right: 2px solid#fff;
      content: "";
    }

    &:checked {
      background-color: #009035;
    }
  }

  & input[type="radio"] {
    width: 24px;
    height: 24px;
    border-radius: 50px;
    padding: 5px;
    border: 1px solid #e6e6e6;

    &::before {
      width: 75%;
      height: 75%;
      /* padding: 5px; */
      position: absolute;
      display: none;
      top: 50%;
      border-radius: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #009035;
      /* border: 2px solid red; */
      content: "";
    }

    &:checked {
      border-color: #009035;
    }
  }
`;

const Inputs = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
  gap: 20px;
  margin-bottom: 25px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  &:nth-child(9),
  &:nth-child(10),
  &:nth-child(11) {
    grid-column: 1 / 3;

    @media (max-width: 768px) {
      grid-column: 1 / 2;
    }
  }

  &:nth-child(11) {
    gap: 3.2rem;
  }

  & div {
    position: relative;
    width: 100%;
    /* background-color: yellow; */
    & select {
      width: 100%;
    }

    & svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15px;
      color: #b3b3b3;
      height: 24px;
      width: 24px;
    }
  }

  & label {
    color: #808080;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & input,
  & textarea,
  & select {
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    outline: none;
    padding: 10px;
    background: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:focus {
      border-color: #009035;
    }

    &::placeholder {
      color: #b3b3b3;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  & textarea {
    height: 90px;
    resize: none;
  }

  & select {
    appearance: none;

    & svg {
      position: absolute;
    }
  }
`;

const Radios = styled.div`
  /* background-color: blue; */
  width: 100%;
  display: flex;
  gap: 20px;
`;

const ForButtons = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: space-between;

  & button {
    width: 65%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CaptchaBox = styled.div`
  /* height: 50px; */
  display: flex;
  align-items: center;
  /* width: 30%; */
`;

const CloseButton = styled.button`
  position: absolute;
  right: 3.2rem;
  top: 3.2rem;
  border: none;
  background-color: transparent;
  & svg {
    font-size: 30px;
  }
`;
function Form() {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(toggleFormOpen());
  }
  return (
    <StyledWrapper>
      <FormBox>
        <CloseButton onClick={handleClose}>
          <LiaTimesSolid />
        </CloseButton>
        <h2>Contact us</h2>
        <Scroll>
          <form>
            <CheckBoxes>
              <Label>
                <input type="checkbox" defaultChecked />
                Request a quote
              </Label>
              <Label>
                <input type="checkbox" />
                Cutting Machinery Info
              </Label>
              <Label>
                <input type="checkbox" />
                Spare Parts & Service
              </Label>
            </CheckBoxes>
            <Inputs>
              <Input>
                <label htmlFor="fname">First name</label>
                <input
                  required
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your first name"
                />
              </Input>
              <Input>
                <label htmlFor="lname">Last name</label>
                <input
                  required
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your last name"
                />
              </Input>
              <Input>
                <label htmlFor="company">Company</label>
                <input
                  required
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                />
              </Input>
              <Input>
                <label htmlFor="position">Your position</label>
                <input
                  required
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Enter your position"
                />
              </Input>
              <Input>
                <label htmlFor="email">E-mail address</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your e-mail address"
                />
              </Input>
              <Input>
                <label htmlFor="number">Phone number</label>
                <input
                  required
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter your phone number"
                />
              </Input>
              <Input>
                <label htmlFor="city">City</label>
                <input
                  required
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city name"
                />
              </Input>
              <Input>
                <label htmlFor="country">Country</label>
                <input
                  required
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter country"
                />
              </Input>
              <Input>
                <label htmlFor="comment">Comment</label>
                <textarea
                  required
                  id="comment"
                  name="comment"
                  placeholder="Enter country"
                />
              </Input>
              <Input>
                <label htmlFor="formSlect">Where did you hear about us?</label>
                <div>
                  <select name="formSlect" id="#" required>
                    <option value="customer"> I'm an existing customer</option>
                    <option value="trade-show"> Trade Show</option>
                    <option value="web">Web Search</option>
                    <option value="social">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                  <IoIosArrowDown />
                </div>
              </Input>
              <Input>
                <label htmlFor="select">Preffered method of contact</label>
                <Radios>
                  <Label>
                    <input type="radio" name="type-contact" defaultChecked />
                    E-mail
                  </Label>
                  <Label>
                    <input type="radio" name="type-contact" />
                    Phone
                  </Label>
                </Radios>
              </Input>
            </Inputs>
            <Label>
              <input type="checkbox" />
              <p>
                By submitting this form, you agree to our
                <Link>Privacy and Policy</Link>.
              </p>
            </Label>
            <ForButtons>
              <CaptchaBox>
                <img src="/captcha.svg" alt="captcha" />
              </CaptchaBox>
              <Button onClick={handleClose}>Send</Button>
            </ForButtons>
          </form>
        </Scroll>
      </FormBox>
    </StyledWrapper>
  );
}

export default Form;
