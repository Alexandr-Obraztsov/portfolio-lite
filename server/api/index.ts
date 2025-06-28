import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env

type RequestType = {
	name: string
	email: string
	message: string
}

app.post(
	'/api/sendMessage',
	async (req: Request<RequestType>, res: Response) => {
		const { name, email, message } = req.body

		if (!name || !email || !message) {
			res.status(400).json({ error: 'Missing required fields' })
		}

		if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
			res.status(400).json({ error: 'Missing Bot Token or Chat ID' })
		}

		const text =
			`🌟 *Новое сообщение с портфолио!*\n\n` +
			`👤 *Имя:* ${name}\n` +
			`📧 *Email:* ${email}\n\n` +
			`💬 *Сообщение:*\n${message}\n\n` +
			`⏰ *Время:* ${new Date().toLocaleString('ru-RU', {
				timeZone: 'Europe/Moscow',
			})}`

		const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text: text,
				parse_mode: 'Markdown',
			}),
		})

		await response.json()

		res.status(response.status).json({
			message: 'Message sent successfully',
		})
	}
)

app.listen(3000, () => {
	console.log(`Server is running on port 3000`)
})
