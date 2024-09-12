import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import Exam from "../interfaces/exam.interface";
import SingleExam from "./exams";


interface ExamsListProps {
    loading: boolean;
    exams: Exam[];
}

const ExamsList: React.FC<ExamsListProps> = ({ loading, exams }) => {

    const [t] = useTranslation();

    return (
        <>
            <Paper
                variant="outlined"
                sx={{
                    borderRadius: "10px",
                    paddingX: 5,
                    paddingY: 3,
                    height: "fit-content",
                    flexGrow: 1,
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "6px" }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
                        {t("What's Due")}
                    </Typography>
                    <Typography sx={{ fontWeight: 400, color: "#4cccc5" }}>
                        {t("View All")}
                    </Typography>
                </Box>

                {!loading && exams ? (
                    exams.map((exam) => (
                        <SingleExam key={exam.id} exam={exam} />
                    ))
                ) : (
                    <p> {t("loading")}</p>
                )}
            </Paper>
        </>
    );
}

export default ExamsList;