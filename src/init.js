import "./db";
import "./models/Video";
import app from "./server"



// port
const PORT = 3000;
const handelListening = () => console.log(`Server is listening on port http://localhost:${PORT} `)

app.listen(PORT, handelListening)