import React from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  styled,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { useFormik } from "formik";
import { validationSchemaForm } from "../../utils/helpers/validate";
import theme from "../../utils/helpers/theme";

const initialValues = {
  username: "",
  password: "",
  email: "",
};

const LoginForm = () => {
  const onSubmit = (values, { resetForm }) => {
    alert(`username: "${values.username}",
    password: "${values.password}",
    email: "${values.email}",`);
    console.log(values);
    resetForm();
  };

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      validateOnChange: false,
      onSubmit,
      validationSchema: validationSchemaForm,
    });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledGrid>
          <StyledPaper elevation={3}>
            <StyledTypography variant="h5">Login</StyledTypography>
            <form onSubmit={handleSubmit}>
              <StyledTextField
                fullWidth
                id="username"
                name="username"
                label="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <StyledTextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <StyledTextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 20 }}
              >
                Submit
              </Button>
            </form>
          </StyledPaper>
        </StyledGrid>
      </ThemeProvider>
    </>
  );
};

export default LoginForm;

const StyledGrid = styled(Grid)(() => ({
  "&.MuiGrid-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const StyledPaper = styled(Paper)(() => ({
  "&.MuiPaper-root": {
    padding: 20,
    width: 300,
  },
}));

const StyledTypography = styled(Typography)(() => ({
  "&.MuiTypography-root": {
    textAlign: "center",
  },
}));

const StyledTextField = styled(TextField)(() => ({
  "&.MuiTextField-root": {
    margin: "10px",
  },
}));
