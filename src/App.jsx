import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:600px)");
  const increase = (value) => {
    dispatch({ type: "INCREMENT", payload: value });
  };
  const decrease = (value) => {
    dispatch({ type: "DECREMENT", payload: value });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <Container
      maxWidth={isMobile ? "xl" : "sm"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          p: isMobile ? 5 : 15,
          width: isMobile ? "100%" : "auto",
          maxHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h1" gutterBottom>
              {count}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup size="large" color="secondary" fullWidth>
              <Button onClick={() => increase(1)}>+1</Button>
              <Button onClick={() => increase(5)}>+5</Button>
              <Button onClick={() => increase(10)}>+10</Button>
            </ButtonGroup>

            <ButtonGroup size="large" color="secondary" fullWidth>
              <Button onClick={() => decrease(1)}>-1</Button>
              <Button onClick={() => decrease(5)}>-5</Button>
              <Button onClick={() => decrease(10)}>-10</Button>
            </ButtonGroup>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={reset}
              sx={{ mt: 2 }}
            >
              reset
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
