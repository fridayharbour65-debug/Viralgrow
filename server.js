const { Client } = require('instagrapi');
const cron = require('node-cron');

const client = new Client();

// Instagram credentials
const username = 'YOUR_INSTAGRAM_USERNAME';
const password = 'YOUR_INSTAGRAM_PASSWORD';

// Connect to Instagram
client.login(username, password);

// Daily post at 10 AM
cron.schedule('0 10 * * *', async () => {
    try {
        const template = `🌟 Junk Removal Special! 🌟\n🚛 Fast and reliable junk removal services! Contact us today!`;
        await client.media.publishPhoto({ photo: 'path-to-your-image.jpg', caption: template });
        console.log('Posted to Instagram at 10 AM!');
    } catch (error) {
        console.error('Error posting to Instagram:', error);
    }
});

// Manual posting endpoint
app.post('/api/post', async (req, res) => {
    const { caption, imagePath } = req.body;
    try {
        await client.media.publishPhoto({ photo: imagePath, caption: caption });
        res.status(201).send('Post created successfully');
    } catch (error) {
        res.status(500).send('Error creating post');
    }
});

module.exports = app;