const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connect = require("./configs/db");
const PORT = 8080;
const env = process.env.NODE_ENV || "development";
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
    origin: "*",
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
app.get("/", (_, response) => {
  response.send("Hello, Topper!");
});

app.get("/ip", (request, response) => {
  const list =
    request.headers["x-forwarded-for"] || request.socket.remoteAddress;
  const ips = list.split(",");

  return response.send({ ip: ips[0] });
});

app.listen(PORT, async () => {
  console.log(`Server running in ${env} mode`);
  try {
    if (env === "development")
      console.log(`Listening at http://localhost:${PORT}`);
    await connect();
    if (env === "development") console.log("Connected to MongoDB");
  } catch ({ message }) {
    console.log(message);
  }
});
