import styled from "styled-components";
import { HiUser } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { PiGenderFemaleThin } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";

const Head = styled.div`
  font-size: 14px;
  & p {
    font-weight: 700;
    color: black;
    margin-bottom: 5px;
    & span {
      font-weight: 400;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 15px;
`;
const ButtonContainer = styled.div`
  width: 20%;
  height: 90px;
  border: 1px solid #8080803d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
`;
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

  & svg {
    width: 15px;
    height: 15px;
  }
`;

const ButtonDiscard = styled.button`
  font-size: 14px;
  padding: 10px 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  background-color: #bababa;
  border: none;
  color: #e4e4e4;
  cursor: pointer;
`;


const ButtonNormal = styled.button`
  font-size: 14px;
  padding: 10px 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  color: grey;
  cursor: pointer;

  & svg {
    width: 15px;
    height: 15px;
  }
`;
const FormSection = styled.div`
  width: 80%;
  border: 0.1px solid #8080803d;
  border-radius: 10px;
  height: fit-content;
  padding: 20px;
`;
const Banner = styled.div`
  height: 10%;
  text-align: center;
`;
const FormBody = styled.div`
  padding: 15px;
`;

const FormHead = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 10px;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 40px;
  color: #6d6d6d;
`;

const Icon = styled.span`
  position: absolute;
  top: 71%;
  transform: translateY(-50%);
  left: 10px; /* Changed to right alignment */
  z-index: 1;

  & svg {
    width: 20px;
    height: 20px;
    color: #4242feb5;
  }
`;

const InputFieldWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Dropdown = styled.select`
   padding: 10px;
  outline: none;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 40px;
  color: #6d6d6d;
  background-color: white;
`;

const ButtonHolder = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`

function Setting() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    // console.log(errors);
  }
  return (
    <div>
      <Head>
        <p>Settings</p>
        <span>All about personal information, password etc.</span>
      </Head>
      <Wrapper>
        <ButtonContainer>
          <div>
            <Button>
              <HiUser /> Personal Information
            </Button>
          </div>
          <div>
            <ButtonNormal>
              <CiLock /> Change Password
            </ButtonNormal>
          </div>
        </ButtonContainer>
        <FormSection>
          <Banner>Banner is not Available!</Banner>
          <FormBody>
            <FormHead>Personal Information</FormHead>
            <div>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <InputFieldWrapper>
                  <FormRow label="First Name" error={errors?.firstName?.message}>
                    <Icon>
                      <IoPersonOutline />
                    </Icon>
                    <Input
                      type="text"
                      id="firstName"
                      {...register("firstName", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>
                  <FormRow label="Last Name" error={errors?.lastName?.message}>
                    <Icon>
                      <IoPersonOutline />
                    </Icon>
                    <Input
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>
                </InputFieldWrapper>

                <InputFieldWrapper>
                  <FormRow label="Email" error={errors?.email?.message}>
                    <Icon>
                      <MdOutlineEmail />
                    </Icon>
                    <Input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>
                  <FormRow label="Mobile Number" error={errors?.mobileNumber?.message}>
                    <Icon>
                      <BsTelephone />
                    </Icon>
                    <Input
                      type="number"
                      id="mobileNumber"
                      {...register("mobileNumber", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>
                </InputFieldWrapper>

                <InputFieldWrapper>
                  <FormRow label="Address" error={errors?.address?.message}>
                    <Icon>
                      <FiMapPin />
                    </Icon>
                    <Input
                      type="text"
                      id="address"
                      {...register("address", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>
                </InputFieldWrapper>

                <InputFieldWrapper>
                  <FormRow label="City" error={errors?.city?.message}>
                    <Icon>
                      <FiMapPin />
                    </Icon>
                    <Dropdown
                      id="city"
                      type="text"
                      {...register("city")}
                    >
                      <option value="male">Gurgaon</option>
                      <option value="female">Delhi</option>
                      <option value="other">Other</option>
                    </Dropdown>
                  </FormRow>
                  <FormRow label="State" error={errors?.state?.message}>
                    <Icon>
                      <FiMapPin />
                    </Icon>
                    <Dropdown
                      id="state"
                      type="text"
                      {...register("state")}
                    >
                      <option value="male">Haryana</option>
                      <option value="female">Delhi</option>
                      <option value="other">Others</option>
                    </Dropdown>
                  </FormRow>
                </InputFieldWrapper>


                <InputFieldWrapper>
                  <FormRow label="Country">
                    <Icon>
                      <FiMapPin />
                    </Icon>
                    <Dropdown
                      id="country"
                      type="text"
                      {...register("country")}
                    >
                      <option value="male">India</option>
                      <option value="other">Other</option>
                    </Dropdown>
                  </FormRow>

                  <FormRow label="Zip Code" error={errors?.zipCode?.message}>
                    <Icon>
                      <FiMapPin />
                    </Icon>
                    <Input
                      type="text"
                      id="zipCode"
                      {...register("zipCode", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>

                 
                </InputFieldWrapper>


                <InputFieldWrapper>
                  <FormRow label="Gender">
                    <Icon>
                      <PiGenderFemaleThin />
                    </Icon>
                    <Dropdown
                      id="gender"
                      type="text"
                      {...register("gender")}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Dropdown>
                  </FormRow>

                  <FormRow label="Date Of Birth" error={errors?.dateOfBirth?.message}>
                    <Icon>
                      <CiCalendarDate />
                    </Icon>
                    <Input
                      type="date"
                      id="dateOfBirth"
                      {...register("dateOfBirth", {
                        required: "This field is required",
                      })}
                    />
                  </FormRow>
                </InputFieldWrapper>


                <InputFieldWrapper>
                  <FormRow label="Language">
                    <Icon>
                      <IoLanguageOutline />
                    </Icon>
                    <Dropdown
                      id="language"
                      type="text"
                      {...register("language")}
                    >
                      <option value="male">English</option>
                      <option value="female">Hindi</option>
                      <option value="other">Other</option>
                    </Dropdown>
                  </FormRow>
                </InputFieldWrapper>

                <ButtonHolder>
                <ButtonDiscard type="reset">Discard</ButtonDiscard>
                <Button type="submit">Save Changes</Button>
                </ButtonHolder>
              </form>
            </div>
          </FormBody>
        </FormSection>
      </Wrapper>
    </div>
  );
}

export default Setting;
