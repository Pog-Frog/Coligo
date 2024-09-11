import { Timeline } from "@mui/icons-material";
import Announcement from "../interfaces/announcement.interface";
import SingleAnnouncement from "./announcements";


interface AnnouncementTImelineProps {
    announcements: Announcement[];
}

const AnnouncementTimeline: React.FC<AnnouncementTImelineProps> = ({ announcements }) => {
    return (
        <>
            <Timeline sx={{ marginTop: "1rem", padding: 0 }}>
                {announcements.map((announcement) => (
                    <SingleAnnouncement
                        key={announcement._id}
                        announcement={announcement}
                    />
                ))}
            </Timeline>
        </>
    );
}

export default AnnouncementTimeline;