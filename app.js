// app.js
const express = require("express");
const cors = require("cors");
const sendEmail = require("./sendEmail");

const app = express();
app.use(cors());

app.post("/sendEmail", async (req, res) => {
    try {
        const data = await sendEmail();
        console.log("Email sent successfully:", data); // 添加日志记录
        res.status(200).send(data);
    } catch (error) {
        console.error("Error sending email:", error); // 添加日志记录
        res.status(500).send({ error: error.message });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
