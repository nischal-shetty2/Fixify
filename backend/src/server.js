const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connect = require("./configs/db");
const PORT = 8080;

// Other Route files
const {
  userRoute,
  conversationRoute,
  gigRoute,
  messageRoute,
  orderRoute,
  reviewRoute,
  authRoute,
} = require("./routes");

// App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://workhive-one.vercel.app",
      "https://workhive-hy6o8pc84-sourav-pauls-projects-65fede6e.vercel.app",
    ],
    credentials: true,
  })
);

// Other Routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/gigs", gigRoute);
app.use("/conversations", conversationRoute);
app.use("/orders", orderRoute);
app.use("/messages", messageRoute);
app.use("/reviews", reviewRoute);

// Routes
app.get("/", (request, response) => {
  response.send("Hello, Topper!");
});

app.get("/ip", (request, response) => {
  const list =
    request.headers["x-forwarded-for"] || request.socket.remoteAddress;
  const ips = list.split(",");

  return response.send({ ip: ips[0] });
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening at http://localhost:${PORT}`);
  } catch ({ message }) {
    console.log(message);
  }
});
