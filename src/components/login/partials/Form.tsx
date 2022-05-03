import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../pages/context/userContext";
import { FormContainer, Text, TextBox, CheckBox, Button } from "./style";

export const Form = () => {
  const router = useRouter();
  const { setUserName } = useContext(UserContext);

  const [buttonState, setButtonState] = useState<boolean>(false);
  const [inputCheckbox, setInputCheckbox] = useState<boolean>(false);
  const [textFilled, setTextFilled] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    if (textFilled && inputCheckbox) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [textFilled, inputCheckbox]);

  const goToNextPage = () => {
    setUserName && setUserName(inputText);
    router.push("/dashboard");
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = event.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(textValue) === true) {
      setInputText(textValue);
    }

    if (textValue === "") {
      setTextFilled(false);
    } else {
      setTextFilled(true);
    }
  };

  return (
    <FormContainer>
      <Text>Please, enter your full name below</Text>

      <Text>Only alphabetical characters are accepted</Text>

      <TextBox
        type="text"
        placeholder="Full Name"
        onChange={handleTextChange}
        value={inputText}
      />

      <CheckBox>
        <input
          type="checkbox"
          onChange={() => setInputCheckbox(!inputCheckbox)}
        />

        <Text>Are you older than 18 years old?</Text>
      </CheckBox>

      <Button disabled={!buttonState} onClick={goToNextPage}>
        Enter
      </Button>
    </FormContainer>
  );
};