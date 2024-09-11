import Announcement from "../interfaces/announcement.interface";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

interface AnnouncementProps {
    key: string;
    announcement: Announcement;
}

const SingleAnnouncement: React.FC<AnnouncementProps> = ({ announcement }) => {
    return (
        <>
            <TimelineItem sx={{ minHeight: "60px", paddingBottom: "2rem", gap: "8px" }}>
                <TimelineSeparator>
                    <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center" }}>
                        <Avatar sx={{ width: 40, height: 40 }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px"}}>
                            <Typography variant="caption" component="p" fontSize={"16px"} noWrap>
                                {announcement.author}
                            </Typography>
                            <Typography variant="caption" component="p" fontSize={"12px"} noWrap color="grey">
                                {announcement.subject}
                            </Typography>
                        </div>
                    </div>
                </TimelineSeparator>
                <TimelineSeparator>
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