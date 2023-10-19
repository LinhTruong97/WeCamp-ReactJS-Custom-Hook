import { LoadingButton } from "@mui/lab";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { Box, Typography } from "@mui/material";

const URL = "https://api.quotable.io/random";
function App() {
  const { data, loading, error } = useFetch(URL);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      maxWidth="800px"
      margin="200px auto"
      padding="20px"
      border="2px solid #000"
    >
      {loading ? (
        <>
          <LoadingButton loading variant="text" sx={{ margin: "auto" }} />
          <Typography variant="body1" sx={{ margin: "auto", fontSize: 30 }}>
            Loading...
          </Typography>
        </>
      ) : error ? (
        <Typography variant="body1" sx={{ margin: "auto" }}>
          Error: {error.message}
        </Typography>
      ) : (
        <>
          <Typography sx={{ fontSize: 30, fontWeight: 800, margin: "auto" }}>
            Quote
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Content: {data && data.content}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Author: {data && data.author}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Tags: {data && data.tags}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Author Slug: {data && data.authorSlug}
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
            Length: {data && data.length}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default App;
