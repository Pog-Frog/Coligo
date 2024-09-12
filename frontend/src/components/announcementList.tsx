import Announcement from "../interfaces/announcement.interface";
import { useTranslation } from "react-i18next";
import { Paper, Typography } from "@mui/material";
import AnnouncementTimeline from "./announcementTimeline";


interface AnnouncementsListProps {
    loading: boolean;
    announcements: Announcement[];
}

const AnnouncementsList: React.FC<AnnouncementsListProps> = ({ loading, announcements }) => {

    const { t } = useTranslation();

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
                <Typography variant="h5" component="h3" sx={{ fontWeight: 500, paddingBottom: "6px" }}>
                    {t("Announcements")}
                </Typography>
                {!loading && announcements ? (
                    <AnnouncementTimeline
                        announcements={announcements}
                    />
                ) : (
                    <p> {t("loading")}</p>
                )}
            </Paper>
        </>
    );
}

export default AnnouncementsList;