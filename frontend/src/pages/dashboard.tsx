import { Box } from "@mui/material";
import Tips from "../components/tips";
import AnnouncementsList from "../components/announcementList";
import ExamsList from "../components/examList";


const Dashboard = () => {

    const announcementsLoading = false;
    const announcements = [
        {
            _id: "1",
            title: "Announcement 1",
            author: "Author 1",
            subject: "Subject 1",
        },
        {
            _id: "2",
            title: "Announcement 2",
            author: "Author 2",
            subject: "Subject 2",
        },
        {
            _id: "3",
            title: "Announcement 3",
            author: "Author 3",
            subject: "Subject 3",
        },
    ];

    const exams = [
        {
            _id: "1",
            title: "Exam 1",
            course: "Course 1",
            topic: "Topic 1",
            due: "Due 1",
        },
        {
            _id: "2",
            title: "Exam 2",
            course: "Course 2",
            topic: "Topic 2",
            due: "Due 2",
        },
        {
            _id: "3",
            title: "Exam 3",
            course: "Course 3",
            topic: "Topic 3",
            due: "Due 3",
        },
    ];


    return (
        <>
            <Tips />
            <Box
                sx={{
                    marginTop: "1.5rem !important",
                    display: "flex",
                    flexDirection: { sm: "column", md: "row" },
                    gap: "2%",
                    flexWrap: { sm: "nowrap", md: "wrap" },
                }}
            >
                <Box width={{ sm: "100%", md: "60%" }}>
                    <AnnouncementsList
                        loading={announcementsLoading}
                        announcements={announcements!}
                    />
                </Box>
                <Box width={{ sm: "100%", md: "38%" }}>
                    <ExamsList
                        loading={announcementsLoading}
                        exams={exams!}
                    />
                </Box>
                
            </Box>
        </>
    );
}

export default Dashboard;