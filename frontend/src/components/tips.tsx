import { Box, Button, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import examImg from "../assets/exams.svg";


const Tips = () => {
    const [t] = useTranslation();

    return (
        <>
            <Paper
                variant="outlined"
                sx={{
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    alignItems: "center",
                    gap: "5rem",
                    overflow: "hidden",
                }}
            >
                <Box paddingX={5} paddingY={3} sx={{ order: { xs: 2, lg: 1 } }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        className="gradient-text"
                        sx={{ fontWeight: 700, textTransform: "uppercase" }}
                    >
                        {t("exams time")}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <Typography variant="subtitle1" component="p">
                            {t("Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.")}
                        </Typography>
                        <Typography variant="body2" component="p" color="#0e9fb7">
                            {t("Nothing happens until something moves - Albert Einstein")}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ width: { xs: "100%", lg: "fit-content", backgroundColor: '#4cccc5' } }}
                        >
                            {t("View Exam Tips")}
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        order: { xs: 1, lg: 2 },
                        height: "13rem",
                        display: { xs: "none", lg: "block" },
                    }}
                >
                    <img
                        src={examImg}
                        style={{ transform: "scale(1.8)", height: "100%" }}
                    />
                </Box>
            </Paper>
        </>
    );
}

export default Tips;