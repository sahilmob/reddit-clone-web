import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/core";
import { useRouter } from "next/router";

import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../toErrorMap";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();

  const submitHandler = async (values, { setErrors }) => {
    const response = await register(values);
    if (response.data?.register?.errors) {
      setErrors(toErrorMap(response.data.register.errors));
    } else if (response.data?.register?.user) {
      router.push("/");
    }
  };

  return (
    <Wrapper variant="regular">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box mt={4}>
              <Button
                type="submit"
                isLoading={isSubmitting}
                variantColor="teal"
              >
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
