import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { login } from "../store/reducers/auth.reducer";


const Login = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSumbit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login({ user: name }));
    }, [dispatch, name]);

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f2f5",
                    padding: "2rem",
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        padding: "2.5rem",
                        textAlign: "center",
                        borderRadius: "12px",
                        maxWidth: "400px",
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "1.5rem",
                            color: "#1976d2",
                            textTransform: "uppercase",
                        }}
                    >
                        {t("login")}
                    </Typography>

                    <form onSubmit={handleSumbit}>
                        <Box
                            sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                        >
                            <TextField
                                id="name"
                                label={t("name")}
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="off"
                                size="medium"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                label={t("password")}
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="off"
                                size="medium"
                                fullWidth
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                size="large"
                                sx={{
                                    marginTop: "1.5rem",
                                    backgroundColor: "#1976d2",
                                    color: "#fff",
                                    '&:hover': {
                                        backgroundColor: "#1565c0",
                                    },
                                }}
                                fullWidth
                            >
                                {t("login")}
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>

        </>
    );
}

export default Login;