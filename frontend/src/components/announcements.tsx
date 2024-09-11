import Announcement from "../interfaces/announcement.interface";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";


interface AnnouncementProps {
    key: string;
    announcement: Announcement;
}

const SingleAnnouncement: React.FC<AnnouncementProps> = ({ announcement }) => {
    return (
        <>
            <TimelineItem sx={{ minHeight: "60px" }}>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="subtitle1" component="p">
                        {announcement.title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}

export default SingleAnnouncement;