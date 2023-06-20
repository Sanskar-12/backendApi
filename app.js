import { connectDb } from "./data/database.js";
import {server} from "./server.js"


//CONNECT DB
connectDb();

//LISTENING SERVER
server.listen(process.env.PORT, () => {
  console.log(`Server is Listening on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
