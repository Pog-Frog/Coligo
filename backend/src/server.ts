import {App} from "./app";
import {AuthRoute} from "./routes/auth.route";
import {ExamRoute} from "./routes/exam.route";
import {AnnouncementRoute} from "./routes/announcement.route";


const app = new App([new AuthRoute(), new ExamRoute(), new AnnouncementRoute()]);

app.listen();