import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "react-email";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio contact from {name}</Preview>
      <Body
        style={{
          backgroundColor: "#0b0d14",
          color: "#f5f6fa",
          fontFamily: "sans-serif",
          padding: "32px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            padding: "32px",
            backgroundColor: "#12141f",
            borderRadius: "16px",
          }}
        >
          <Heading style={{ fontSize: "20px", margin: "0 0 24px" }}>
            New message from your portfolio
          </Heading>
          <Text style={{ margin: "0 0 8px" }}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={{ margin: "0 0 16px" }}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={{ borderColor: "#27293a" }} />
          <Text style={{ whiteSpace: "pre-wrap", marginTop: "16px" }}>
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
