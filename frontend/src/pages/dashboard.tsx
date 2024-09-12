import { Box } from "@mui/material";
import Tips from "../components/tips";
import AnnouncementsList from "../components/announcementList";
import ExamsList from "../components/examList";
import useAnnouncements from "../hooks/useAnnouncements";
import useExams from "../hooks/useExams";


const Dashboard = () => {

    const { announcements, isLoading: announcementsLoading } = useAnnouncements();
    const { exams, isLoading: examsLoading } = useExams();
    console.log(announcements);

    return (
        <>
            <Tips />
            <Box
                sx={{
                    marginTop: "1.5rem !important",
                    display: "flex",
                    flexDirection: "row",
                    gap: "2%",
                    flexWrap: "wrap",
                }}
            >
                <Box width={{ xs: "100%", sm: "100%", md: "60%" }} >
                    <AnnouncementsList
                        loading={announcementsLoading}
                        announcements={announcements!}
                    />
                </Box>
                <Box width={{xs: "100%", sm: "100%", md: "38%" }} sx={{marginTop: {xs: "2%", sm: "2%", md: "0", lg: "0"}}}>
                    <ExamsList
                        loading={examsLoading}
                        exams={exams!}
                    />
                </Box>
                
            </Box>
        </>
    );
}

export default Dashboard;