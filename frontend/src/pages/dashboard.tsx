import { Box } from "@mui/material";
import Tips from "../components/tips";
import AnnouncementsList from "../components/announcementList";


const Dashboard = () => {

    const announcementsLoading = false;
    const announcements = [
        {
            _id: "1",
            title: "Announcement 1",
        },
        {
            _id: "2",
            title: "Announcement 2",
        },
        {
            _id: "3",
            title: "Announcement 3",
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
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <AnnouncementsList
                    loading={announcementsLoading}
                    announcements={announcements!}
                />
                
            </Box>
        </>
    );
}

export default Dashboard;