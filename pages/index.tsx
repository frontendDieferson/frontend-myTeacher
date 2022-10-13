import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import { Header } from "../src/components/Header";
import { ListTeachers } from "../src/components/ListTheachers";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listTeachers,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    bookClass,
    message,
    setMessage
  } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <ListTeachers
          teachers={listTeachers}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        ></ListTeachers>
      </Box>

      <Dialog
        onClose={() => setSelectedTeacher(null)}
        open={selectedTeacher !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite seu nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite seu melhor Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 2 }}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancelar</Button>
          <Button onClick={() => bookClass()}>Marcar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
        open={message.length > 0}
        message={message} 
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </div>
  );
};

export default Home;
