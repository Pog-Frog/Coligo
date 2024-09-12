import { Box, Button, Typography } from "@mui/material";
import Exam from "../interfaces/exam.interface";
import { FaTasks } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface SingleExamProps {
    exam: Exam;
}


const SingleExam: React.FC<SingleExamProps> = ({ exam }) => {

    const [t] = useTranslation();

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "1rem", borderBottom: "1px solid #e0e0e0", gap: "8px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <FaTasks size={20} color="#4cccc5" />
                    <Typography variant="h6" component="h3">{exam.title}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p style={{ color: "grey" }}><span>Course:</span> {exam.course}</p>
                    <p style={{ color: "grey" }}><span>Topic:</span> {exam.topic}</p>
                    <p style={{ color: "grey" }}><span>Due:</span> {exam.due}</p>

                </Box>
                <Button
                    variant="contained"
                    sx={{ border: "2px solid #4cccc5", color: "#4cccc5", backgroundColor: "transparent" }}
                >
                    {t("Start Quiz")}
                </Button>
            </Box>
        </>
    );
}

export default SingleExam;