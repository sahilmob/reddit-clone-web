import { Box } from "@chakra-ui/core";

interface WrapperProps {
  variant?: "small" | "regular";
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxWidth={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
